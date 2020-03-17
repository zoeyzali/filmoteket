import React from 'react'
import { Col } from 'reactstrap'


const SearchDetails = ( props ) => {
    let localImage = props.currentFilm.image
    let posterPathImg = `https://image.tmdb.org/t/p/w500/${props.currentFilm.poster_path}`
    console.log( posterPathImg, "props img", localImage )

    return (
        <div className="container search-details">
            <div className="row"
                onClick={props.closeFilmInfo}
                style={{ cursor: "pointer", paddingTop: 40 }}>
                <i className="fas fa-arrow-left">
                </i>
                <span style={{ marginLeft: 10 }}>Go Back</span>
            </div>

            <div className="row mt-4">
                <Col xs="4" sm="4" md="4" lg="4" className="py-2">
                    {posterPathImg === null || undefined ?
                        <img
                            src={`https://dummyimage.com/w185/000/fff.png&text=No+images`}
                            className="img-fluid"
                            alt={props.currentFilm.title}
                            style={{ width: "100%" }}
                        />
                        : <img src={posterPathImg}
                            className="img-fluid"
                            alt={props.currentFilm.poster_path}
                            style={{ width: "100%" }}
                        />
                    }
                    {( localImage !== undefined || null ) || ( posterPathImg === null || undefined ) ?
                        <img src={'/filmposters/' + localImage} className="img-fluid"
                            alt={props.currentFilm.title}
                        />
                        : ""
                    }
                </Col>
                <Col xs="8" sm="8" md="8" lg="8" className="py-2">
                    <h1>{props.currentFilm.title}</h1>
                    <span>
                        {props.currentFilm.release_date !== undefined ?
                            props.currentFilm.release_date.substring( 5 ).split( "-" ).concat( props.currentFilm.release_date.substring( 0, 4 ) ).join( "-" )
                            : ""
                        }
                    </span>
                    <p className="film-description">
                        {props.currentFilm.overview}
                    </p>
                    {props.currentFilm.backdrop_path ?
                        <img src={`https://image.tmdb.org/t/p/w500/${props.currentFilm.backdrop_path}`}
                            className="img-secondary"
                            alt={props.currentFilm.poster_path}
                        />
                        : ""
                    }
                </Col>
            </div>
        </div>
    )
}


export default SearchDetails