import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


class FilmsCannes extends Component {
    constructor( props ) {
        super( props );
        this.films = require( '../json/films' )
    }

    mapCannesFilms = () => {
        const mappedCannes = this.films.map( ( film, id ) => {
            return (
                <Col key={id} xs={2} md={2} lg={2} className="films-row">
                    <Link to="#" onClick={() => this.props.viewFilmInfo( this.props.filmId )}>
                        <img src={'/filmposters/' + film.image} className="posters img-fluid" alt="film-poster" />
                    </Link>
                </Col>
            )
        } )
        return mappedCannes;
    }
    render() {
        return (
            <Row>
                {this.mapCannesFilms()}
            </Row>
        )
    }
}

export default FilmsCannes

