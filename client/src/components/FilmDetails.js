import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { tmdbKey } from '../utils/api-request'


export const FilmDetails = ( { match } ) => {
    const { params: {
        id
    } } = match
    const [film, setFilm] = useState()
    const [cast, setCast] = useState( [] )
    // const [toggleCast, setToggleCast] = useState( false )

    useEffect( () => {
        const getFilmDetails = async () => {
            const response = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&append_to_response=credits,images,keywords` )
            const result = await response.json()
            // console.log( result, "detail" )
            setFilm( result )
            setCast( result.credits.cast )
        }
        getFilmDetails()
    }, [id] )
    console.log( film, "film details" )

    // const toggleFullCast = () => {
    //     setToggleCast( !toggleCast )
    // }

    return (
        <Container className="details__wrapper mx-auto">
            {film &&
                <Row>
                    <Col sm={12} md={4} lg={4} className="py-2">
                        <img src={film.poster_path ?
                            `https://image.tmdb.org/t/p/w500/${film.poster_path}` : `https://dummyimage.com/w500/222/fff.png&text=NA+poster`}
                            alt={film.title}
                            className="img-fluid main__poster"
                        />
                    </Col>
                    <Col sm={12} md={8} lg={8} className="py-2">
                        <div className="details__inner">
                            <h2>{film.title}</h2>
                            <h6>{film.original_title}</h6>
                            <span className="tagline__span">
                                {film.tagline && film.tagline}
                            </span>
                            <br />

                            {film.genres && film.genres.length > 0 ? film.genres.map( genre => <span key={genre.id}>
                                {genre ? genre.name : ""} {" "}</span>
                            ) : ""}
                            <br />

                            <span>
                                {film.production_countries ? film.production_countries[0].name : ""} / {film.release_date} / {film.runtime}{""}min</span>
                            <span>
                                {`/rating ${film.vote_average}/10`}
                            </span>

                            <div className="cast__details">
                                <h4>THE CAST</h4>
                                <ul className="cast__list">
                                    {cast &&
                                        cast.map( castMember => {
                                            // console.log( castMember, "castmember" )
                                            return (
                                                <li key={castMember.id}>
                                                    {castMember.order <= 8 && castMember.profile_path !== null ? (
                                                        <React.Fragment>
                                                            <figure className="cast_img__rounded">
                                                                <img
                                                                    src={`https://image.tmdb.org/t/p/w185/${castMember.profile_path}`}
                                                                    alt={castMember.name}
                                                                    className="img-thumbnail" />
                                                            </figure>
                                                            <span>
                                                                {castMember.name}</span>
                                                        </React.Fragment>
                                                    ) : ( <span className="d-none"></span>
                                                        )
                                                    }
                                                </li>
                                            )
                                        } )
                                    }
                                </ul>
                            </div>
                            <div className="details__content">
                                <h4>SYNOPSIS</h4>
                                <p>{film.overview}
                                </p>
                            </div>
                            <div className="details__gallery">
                                <h4>ev. gallery images/trailer</h4>
                                {film.images &&
                                    film.images.backdrops.map( ( image, id ) => {
                                        return (
                                            <img key={id}
                                                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                                alt={image}
                                                className="img-fluid backdrop__img"
                                            />
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            }
        </Container>
    )
}
