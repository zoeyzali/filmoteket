import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CarouselSlider from './CarouselSlider'
import AboutUs from './AboutPage'
import SearchBox from './SearchBox'
import FilmsList from './FilmsList'
import Pagination from './Pagination'
import SearchDetails from './SearchFilmDetails'
import { tmdbKey } from '../utils/api-request'

class StartPage extends Component {
    constructor() {
        super()
        this.state = {
            films: [],
            query: '',
            totalResults: 0,
            currentPage: 1,
            currentFilm: null,
            people: []
        }
    }

    /** search function TMDB API needed */
    handleSubmit = ( event ) => {
        event.preventDefault()
        fetch( `https://api.themoviedb.org/3/search/multi?api_key=${tmdbKey}&query=${this.state.query}` )
            .then( data => data.json() )
            .then( data => {
                console.log( data.results.media_type, 'results' )
                if ( data.results[0].media_type === "person" ) {
                    this.setState( {
                        people: [...data.results]
                    } )
                }
                this.setState( {
                    films: [...data.results],
                    totalResults: data.total_results

                } )
            } )
    }

    handleChange = ( event ) => {
        this.setState( { query: event.target.value } )
    }

    nextPage = ( pageNumber ) => {
        fetch( `https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${this.state.query}&page=${pageNumber}` )
            .then( data => data.json() )
            .then( data => {
                // console.log( data, 'search-nextPage' )
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
        const numberOfPages = Math.floor( this.state.totalResults / 20 )
        return (
            <Container className="start-page">
                <div className="intro-section">
                    <Col xs="12" md="12" lg="12"
                        className="container">
                        <AboutUs />
                        <SearchBox
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                        />
                        <CarouselSlider />
                    </Col>
                </div>

                <div className="container">
                    {  /** search result/content */}
                    {this.state.currentFilm === null ?
                        <Row className="mt-5 search-wrapper bg-light">
                            <div className="search-content">
                                <FilmsList viewFilmInfo={this.viewFilmInfo} films={this.state.films}
                                />
                            </div>
                        </Row> : <SearchDetails
                            currentFilm={this.state.currentFilm}
                            closeFilmInfo={this.closeFilmInfo}
                        />
                    }
                    {this.state.totalResults > 20 && this.state.currentFilm === null
                        ?
                        <Pagination
                            pages={numberOfPages}
                            nextPage={this.nextPage}
                            currentPage={this.state.currentPage}
                        />
                        :
                        ""}
                </div>
            </Container>
        )
    }
}


export default StartPage



