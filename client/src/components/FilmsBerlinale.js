import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { tmdbKey } from '../utils/api-request'
import SearchDetails from './SearchFilmDetails'

class FilmsBerlinale extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            filmsBer: [],
            currentPage: 1,
            totalResults: 0,
            currentFilm: null,
        }
    }
    getFilmsBer = () => {
        fetch( `https://api.themoviedb.org/4/list/112863?api_key=${tmdbKey}` )
            .then( data => data.json() )
            .then( data => {
                this.setState( {
                    filmsBer: data.results,
                    totalResults: data.total_results,
                }, () => {
                    if ( this.state.filmsBer.length > 1 ) {
                        this.mapFilms()
                    }
                } )
            } )
    }
    nextPage = ( pageNumber ) => {
        fetch( `https://api.themoviedb.org/4/list/112863?api_key=${tmdbKey}&page=${pageNumber}` )
            .then( data => data.json() )
            .then( data => {
                this.setState( {
                    filmsBer: data.results,
                    currentPage: pageNumber,
                } )
            } )
    }
    viewFilmInfo = ( id ) => {
        const filteredFilm = this.state.filmsBer.filter( film => film.id === id )
        const newCurrentFilm = filteredFilm.length > 0 ? filteredFilm[0] : null
        this.setState( { currentFilm: newCurrentFilm } )
        // console.log( newCurrentFilm, "newcurrentfilm" )
    }
    closeFilmInfo = () => {
        this.setState( { currentFilm: null } )
    }
    mapFilms = () => {
        const mappedFilms = this.state.filmsBer.map( ( film, id ) => {
            return (
                <Col key={id} xs={4} sm={4} md={2} lg={2} className="films-row">
                    <Link to={`/movies/berlinale/${film.id}`} onClick={() => this.viewFilmInfo( film.id )}>
                        {film.poster_path !== null
                            ? <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`
                            } className="img-fluid posters"
                                alt={film.title} />
                            : <img
                                src={`https://dummyimage.com/w185/222/fff.png&text=No+images`}
                                className="img-fluid posters"
                                alt={film.title}
                                style={{ width: "100%", height: "100%" }}
                            />
                        }
                    </Link>
                </Col>
            )
        } )
        return mappedFilms
    }
    componentDidMount() {
        this.getFilmsBer()
    }

    render() {
        const numberOfPages = Math.floor( this.state.totalResults / 20 )
        return (
            <>
                <Row>
                    {this.mapFilms()}
                </Row>
                <Row>
                    {this.state.totalResults > 20
                        ? <Pagination
                            pages={numberOfPages}
                            nextPage={this.nextPage}
                            currentPage={this.state.currentPage}
                        />
                        : ""}
                </Row>
                {this.state.currentFilm === null
                    ? this.state.currentFilm
                    : <SearchDetails
                        currentFilm={this.state.currentFilm}
                        closeFilmInfo={this.closeFilmInfo}
                    />
                }
            </>
        )
    }
}

export default FilmsBerlinale