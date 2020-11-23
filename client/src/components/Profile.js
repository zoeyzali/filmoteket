import React, { Component } from 'react'
import './LoginPage'
import profileImg from '../images/mr-robot.png'
import { UserContext } from '../context/UserContext'
import { tmdbKey, token, accountId } from '../utils/api-request'
import { Link } from 'react-router-dom'
import { GetFavoritesList } from './GetFavoritesList'

class Profile extends Component {
    state = {
        favslist: [],
        list: {},
        allLists: [],
        listId: ""
    }
    static contextType = UserContext

    getAllMyLists = async () => {
        const response = await fetch( `https://api.themoviedb.org/4/account/${accountId}/lists?page=1&api_key=${tmdbKey}`, {
            method: 'GET',
            headers: {
                authorization: token
            },
        } )
        const result = await response.json()
        // console.log( result.results, "all my lists" )
        this.setState( {
            allLists: result.results
        } )
    }

    getMyFavorites = async ( id ) => {
        this.state.listId = id
        const response = await fetch( `https://api.themoviedb.org/4/list/139797?page=1&api_key=${tmdbKey}
`)
        const result = await response.json()
        console.log( result, "favslist res" )
        this.setState( {
            list: result,
            favslist: result.results
        } )
        // console.log( this.state.favslist, 'my favs' )
    }

    componentDidMount() {
        const { user } = this.context
        console.log( user, "profile-user" )
        this.getMyFavorites()
        this.getAllMyLists()
    }

    render() {
        // console.log( this.state, "state" )
        const { user } = this.context
        const { favslist, list, allLists } = this.state
        return (
            <div className="profiles-page bg-light">
                <div className="grid__wrapper">
                    <aside className="bg-white p-2">
                        <img
                            src={profileImg}
                            className="img-fluid profile__img"
                            alt={profileImg}
                            style={{ width: "100%" }}
                        />
                        <h3>
                            {user.firstName}{" "}
                            {user.lastName}
                        </h3>
                        <span>{user.email}</span>
                        <GetFavoritesList />
                    </aside>
                    <main className="bg-white p-2">
                        <div className="col__1_wrapper">
                            <h2>{list.name}</h2>
                            <span>{list.description}</span>
                            <ul className="col__1">
                                {favslist.map( film => {
                                    return (
                                        <li key={film.id}>
                                            <div className="list__item_card">
                                                <img src={`https://image.tmdb.org/t/p/w185/${film.poster_path}`}
                                                    className="img-fluid"
                                                    alt={film.title}
                                                />
                                                <div className="list__item_content">
                                                    <span>{film.title}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                } )}
                            </ul>
                        </div>
                        <div className="col__2_wrapper">
                            <h2>All Lists</h2>
                            <p>Brap brap brap</p>
                            <ul className="col__2">
                                {allLists.map( list => {
                                    return (
                                        <Link to={`/lists/${list.id}/`} key={list.id}>
                                            <li>
                                                <img src={`https://image.tmdb.org/t/p/w185/${list.backdrop_path}`}
                                                    className="img- img-thumbnail"
                                                    alt={list.name}
                                                />
                                                <span>
                                                    {list.name}
                                                </span>
                                            </li>
                                        </Link>
                                    )
                                } )}
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Profile