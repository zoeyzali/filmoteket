import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const FilmUI = ( props ) => {
    return (
        <Col xs={2} sm={2} md={2} lg={2} className="films-row">
            <Link to="#" onClick={() => props.viewFilmInfo( props.filmId )}>
                {props.image === null ? <img className="posters img-fluid" alt="film-poster" src={`https://dummyimage.com/w185/000/fff.png&text=No+images`
                } /> :
                    <img src={`https://image.tmdb.org/t/p/w185/${props.image}`
                    } className="posters img-fluid" alt="film-poster" />
                }
            </Link>
        </Col>
    )
}


export default FilmUI