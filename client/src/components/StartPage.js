import React, { Component } from 'react'
import {
    Container, Row, Col
} from 'reactstrap'
import CarouselSlider from './CarouselSlider'
import AboutUs from './AboutPage'
import SearchBox from './SearchBox'
import FilmsList from './FilmsList'
import Pagination from './Pagination'
import FilmDetails from './FilmDetails'


class StartPage extends Component {
    constructor() {
        super()
        this.state = {
            films: [],
            query: '',
            totalResults: 0,
            currentPage: 1,
            currentFilm: null,
        }
    }

    /** search function TMDB API needed */
    handleSubmit = ( event ) => {
        event.preventDefault()
        const api_key = process.env.REACT_APP_API_KEY
        fetch( `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.query}` )
            .then( data => data.json() )
            .then( data => {
                console.log( data, 'films' )
                this.setState( {
                    films: [...data.results],
                    totalResults: data.total_results
                } )
            } )
    }

    handleChange = ( event ) => {
        this.setState( { query: event.target.value } )
    }

    nextPage = ( pageNumber, api_key ) => {
        fetch( `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.query}&page=${pageNumber}` )
            .then( data => data.json() )
            .then( data => {
                console.log( data, 'hej search-nextPage' )
                this.setState( {
                    films: [...data.results],
                    currentPage: pageNumber,
                } )
            } )
    }

    viewFilmInfo = ( id ) => {
        const filteredFilm = this.state.films.filter( film => film.id === id )
        const newCurrentFilm = filteredFilm.length > 0 ? filteredFilm[0] : null
        this.setState( { currentFilm: newCurrentFilm } )
    }

    closeFilmInfo = () => {
        this.setState( { currentFilm: null } )
    }

    render() {
        const numberOfPages = Math.floor( this.state.totalResults / 20 );
        return (
            <>
                <Container className="start-page">
                    <Row>
                        <Col xs="12" md="12" lg="12" className="container">
                            <AboutUs />
                            <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            <CarouselSlider />
                        </Col>
                    </Row>
                    {this.state.currentFilm === null ?
                        <Row className="mt-5">
                            <Col xs="12" sm="12" md="12" lg="12">
                                <div className="mock-content">
                                    <FilmsList viewFilmInfo={this.viewFilmInfo} films={this.state.films} />
                                </div>
                            </Col>
                        </Row> : <FilmDetails currentFilm={this.state.currentFilm} closeFilmInfo={this.closeFilmInfo} />
                    }
                    {this.state.totalResults > 20 && this.state.currentFilm === null ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ""}
                </Container>
            </>
        )
    }
}


export default StartPage



