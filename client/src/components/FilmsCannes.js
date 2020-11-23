import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import SearchDetails from './SearchFilmDetails'
import { UserContext } from '../context/UserContext'

/** Cannes list made by someone else
 * const response = await fetch( `https://api.themoviedb.org/4/list/${43069}?sort_by=primary_release_date.desc&page=1&api_key=${tmdbKey}*/
class FilmsCannes extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            currentFilm: null,
            cannesFilms: [],
            favoriteNumber: 0,
            favorited: false,
            mssg: ""
        }
        this.films = require( '../json/films' )
    }
    static contextType = UserContext

    addTofavorite = async () => {
        const { user } = this.context
        // console.log( user.lists, "user context function" )
        try {
            const response = await fetch( `/users/${user._id}/create-favorite`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( { _id: this.state.currentFilm.id } )
            } )

            const result = await response.json()
            console.log( result, "reeeeesult" )
            if ( result.errorMssg ) {
                this.setState( {
                    mssg: result.errorMssg,
                    favorited: false,
                } )
            }
            if ( result.success === false ) {
                // alert( result.errorMssg )
                this.setState( {
                    favorited: false,
                    mssg: result.errorMssg
                } )
            }
            if ( result.success === true ) {
                this.setState( {
                    favorited: true,
                    favoriteNumber: this.state.favoriteNumber + 1,
                    favorites: result.favoriteFilm
                } )
            }
        } catch ( error ) {
            console.log( error )
        }
    }

    viewFilmInfo = ( id ) => {
        const filteredFilm = this.films.filter( film => film.id === id )
        const newCurrentFilm = filteredFilm.length > 0 ? filteredFilm[0] : null
        this.setState( { currentFilm: newCurrentFilm } )
        // console.log( newCurrentFilm, "newcurrentfilm", filteredFilm )
    }

    closeFilmInfo = () => {
        this.setState( {
            currentFilm: null,
            mssg: null
        } )
    }

    mapCannesFilms = () => {
        const mappedCannes = this.films.map( ( film, id ) => {
            // console.log( film.title, "cannes film" )
            return (
                <Col key={id} xs={4} sm={4} md={2} lg={2} className="films-row">
                    <Link to="#" onClick={() => this.viewFilmInfo( film.id )}>
                        <img src={'/filmposters/' + film.image}
                            className="img-fluid posters"
                            alt="film-poster" />
                    </Link>
                </Col>
            )
        } )
        // console.log( mappedCannes, "mappedCannes" )
        return mappedCannes
    }

    render() {
        return (
            <>
                <Row>
                    {this.mapCannesFilms()}
                </Row>
                {
                    this.state.currentFilm === null
                        ? this.state.currentFilm
                        : <SearchDetails
                            currentFilm={this.state.currentFilm}
                            closeFilmInfo={this.closeFilmInfo}
                            addTofavorite={this.addTofavorite}
                            mssg={this.state.mssg}
                            removeFavorited={this.removeFavorited}
                        />
                }
            </>
        )
    }
}

export default FilmsCannes