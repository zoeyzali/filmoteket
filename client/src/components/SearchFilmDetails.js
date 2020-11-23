import React from 'react'
import { Col } from 'reactstrap'

const SearchDetails = ( props ) => {
    return (
        <div className="search-details">
            <div className="row"
                onClick={props.closeFilmInfo}
                style={{ cursor: "pointer", paddingTop: 40 }}>
                <i className="fas fa-arrow-left">
                </i>
                <span style={{ marginLeft: 10 }}>Go Back</span>
            </div>
            <div className="row my-2">
                <Col xs="4" sm="4" md="4" lg="4" className="py-2">
                    <img src={props.currentFilm.poster_path !== undefined
                        ? `https://image.tmdb.org/t/p/w500/${props.currentFilm.poster_path}`
                        : `/filmposters/${props.currentFilm.image}`}
                        className="img-fluid"
                        alt={props.currentFilm.title}
                        style={{ width: "100%" }}
                    />
                </Col>
                <Col xs="8" sm="8" md="8" lg="8" className="py-2">
                    <h1>{props.currentFilm.title}</h1>
                    <span>{props.currentFilm.tagline}</span>
                    <span>
                        {props.currentFilm.release_date !== undefined
                            ? props.currentFilm.release_date.substring( 5 ).split( "-" ).concat( props.currentFilm.release_date.substring( 0, 4 ) ).join( "-" )
                            : ""
                        }
                    </span>
                    <span onClick={props.addTofavorite}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512" className="heart__svg"
                            style={{ maxHeight: "40px", maxWidth: "40px" }}>
                            <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z" /></svg>
                    </span>
                    <h3 className="py-2 text-center error__mssg">{props.mssg}</h3>
                    <p className="film-description">
                        {props.currentFilm.overview}
                    </p>
                    {props.currentFilm.backdrop_path
                        ? <img src={`https://image.tmdb.org/t/p/w500/${props.currentFilm.backdrop_path}`}
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