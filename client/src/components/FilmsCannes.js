import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import SearchDetails from './SearchFilmDetails'


class FilmsCannes extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            currentFilm: null,
            cannesFilms: []
        }
        this.films = require( '../json/films' )
    }

    viewFilmInfo = ( id ) => {
        const filteredFilm = this.films.filter( film => film.id === id )
        const newCurrentFilm = filteredFilm.length > 0 ? filteredFilm[0] : null
        this.setState( { currentFilm: newCurrentFilm } )
        console.log( newCurrentFilm, "newcurrentfilm", filteredFilm )
    }

    closeFilmInfo = () => {
        this.setState( { currentFilm: null } )
    }

    mapCannesFilms = () => {
        const mappedCannes = this.films.map( ( film, id ) => {
            console.log( film.title, "cannes film" )
            return (
                <Col key={id} xs={4} sm={2} md={2} lg={2} className="films-row">
                    <Link to="#" onClick={() => this.viewFilmInfo( film.id )}>
                        <img src={'/filmposters/' + film.image} className="img-fluid"
                            alt="film-poster" />
                    </Link>
                </Col>
            )
        } )
        // console.log( mappedCannes, "mappedCannes" )
        return mappedCannes
    }



    render() {
        console.log( this.films, "Cannes-films" )
        return (
            <>
                <Row>
                    {this.mapCannesFilms()}
                </Row>
                {
                    this.state.currentFilm === null ? this.state.currentFilm : <SearchDetails
                        currentFilm={this.state.currentFilm} closeFilmInfo={this.closeFilmInfo}
                    />
                }
            </>
        )
    }
}

export default FilmsCannes

