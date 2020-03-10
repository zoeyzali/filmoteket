import React from 'react'
import { Container, Row } from 'reactstrap'
import FilmUI from './FilmUI'

const FilmsList = ( props ) => {
    return (
        <Container>
            <Row>
                {props.films.map( ( film ) => {
                    return (
                        <FilmUI key={film.id} viewFilmInfo={props.viewFilmInfo} filmId={film.id} title={film.title} overview={film.overview} image={film.poster_path} date={film.release_date} />
                    )
                } )}
            </Row>
        </Container>
    )
}


export default FilmsList