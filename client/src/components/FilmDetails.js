import React from 'react'
import { Col } from 'reactstrap'



const FilmDetails = ( props ) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeFilmInfo} style={{ cursor: "pointer", paddingTop: 40 }}>
                <i className="fas fa-arrow-left"></i>
                <span style={{ marginLeft: 10 }}>Go Back</span>
            </div>
            <div className="row mt-4">
                <Col xs="4" sm="4" md="4" lg="4">
                    {props.currentFilm.poster_path === null ? <img className="posters img-fluid" alt="film-poster" src={`https://dummyimage.com/w185/000/fff.png&text=No+images`
                    } style={{ width: "100%", height: 390 }} /> : <img src={`https://image.tmdb.org/t/p/w500/${props.currentFilm.poster_path}`
                    } className="posters img-fluid" alt="film-poster" style={{ width: "100%", height: 390 }} />}
                </Col>
                <Col xs="8" sm="8" md="8" lg="8">
                    <h1>{props.currentFilm.title}</h1>
                    <span>{props.currentFilm.release_date.substring( 5 ).split( "-" ).concat( props.currentFilm.release_date.substring( 0, 4 ) ).join( "-" )}</span>
                    <p className="desc-text">{props.currentFilm.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${props.currentFilm.backdrop_path}`}
                        className="" alt="film-poster" />
                </Col>
            </div>
        </div>
    )
}


export default FilmDetails