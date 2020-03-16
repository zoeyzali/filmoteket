import React from 'react'
import { Col } from 'reactstrap'


const FilmsBerUI = ( props ) => {
    return (
        props.filmsBer.map( ( film ) => {
            return (
                <Col key={film.id} xs={2} md={2} lg={2} className="films-row">
                    <Link to="#" onClick={() => this.props.viewFilmInfo( this.props.filmId )}>
                        <img src={`https://image.tmdb.org/t/p/w185/${film.poster_path}`
                        } className="posters img-fluid" alt="film-poster" />
                    </Link>
                </Col>
            )
        }
        )
    )
}


export default FilmsBerUI