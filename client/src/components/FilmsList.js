import React from 'react'
import SearchResultUI from './SearchResultUI'
import { Row } from 'reactstrap'

const FilmsList = ( props ) => {
    return (
        <Row className="search-list">
            {props.films.map( ( film ) => {
                return (
                    <SearchResultUI
                        key={film.id}
                        viewFilmInfo={props.viewFilmInfo}
                        filmId={film.id}
                        title={film.title}
                        overview={film.overview}
                        image={film.poster_path || film.image}
                        date={film.release_date}
                    />
                )
            } )}
        </Row>
    )
}


export default FilmsList