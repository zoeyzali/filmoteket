import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
// import FilmDetails from './FilmDetails';


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
        const api_key = process.env.REACT_APP_API_KEY
        fetch( `https://api.themoviedb.org/4/list/112863?api_key=${api_key}` )
            .then( data => data.json() )
            .then( data => {
                // console.log( data, 'film data' )
                this.setState( {
                    filmsBer: [...data.results],
                    totalResults: data.total_results,
                }, () => {
                    if ( this.state.filmsBer.length > 1 ) {
                        this.mapFilms()
                    }
                } )
            } )
    }

    nextPage = ( pageNumber, api_key ) => {
        fetch( `https://api.themoviedb.org/4/list/112863?api_key=${api_key}&page=${pageNumber}` )
            .then( data => data.json() )
            .then( data => {
                // console.log( data, 'berlinale-page2' )
                this.setState( {
                    filmsBer: [...data.results],
                    currentPage: pageNumber,
                } )
            } )
    }

    viewFilmInfo = ( id ) => {
        const filteredFilm = this.state.films.filter( film => film.id === id )
        const newCurrentFilm = filteredFilm.length > 0 ? filteredFilm[0] : null
        this.setState( { currentFilm: newCurrentFilm } )
    }

    closeFilmInfo = () => {
        this.setState( { currentFilm: null } )
    }

    mapFilms = () => {
        const mappedFilms = this.state.filmsBer.map( ( film, id ) => {
            return (
                <Col key={id} xs={2} md={2} lg={2} className="films-row">
                    <Link to="#" onClick={() => this.viewFilmInfo( this.filmId )}>
                        <img src={`https://image.tmdb.org/t/p/w185/${film.poster_path}`
                        } className="posters img-fluid" alt="film-poster" />
                    </Link>
                </Col>
            )
        } )
        return mappedFilms
    }

    // componentDidMount() {
    //   this.getFilmsBer()
    // }

    render() {
        const numberOfPages = Math.floor( this.state.totalResults / 20 );
        return (
            <>
                <Row>
                    {this.mapFilms()}
                </Row>
                <Row>
                    <Col xs="6" sm="4" md="3" lg="3" className="header">
                        {this.state.totalResults > 20 ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ""}
                    </Col>
                </Row>
                {/* { this.state.currentFilm === null ? this.state.currentFilm : <FilmDetails currentFilm={this.state.currentFilm} closeFilmInfo={this.closeFilmInfo} /> } */}
            </>
        )
    }
}

export default FilmsBerlinale