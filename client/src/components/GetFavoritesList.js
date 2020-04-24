import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const GetFavoritesList = () => {
    const [favorites, setFavorites] = useState( [] )
    const { user } = useContext( UserContext )
    // console.log( user.lists, "addtoFav" )

    useEffect( () => {
        const fetchFavorites = async () => {
            const userId = user._id
            try {
                const response = await fetch( `/users/${userId}/favorites` )
                const result = await response.json()
                if ( result ) {
                    // console.log( result.lists, "result FAVS" )
                    setFavorites( result.lists )
                }
            } catch ( error ) {
                console.error()
            }
        }
        fetchFavorites()
        // eslint-disable-next-line 
    }, [] )

    const removeFavorited = async ( id ) => {
        try {
            const filteredFavs = favorites.filter( favorite => favorite._id !== id )
            const favToDelete = favorites.find( favorite => favorite._id === id )

            await fetch( `/users/favorites/${favToDelete._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            } )
            setFavorites( [...filteredFavs] )

            // const result = await response.json()
            // console.log( "reeemoved res" )
        } catch ( error ) {
            console.log( error )
        }
    }


    return (
        <div className="favorites__list">
            {favorites &&
                favorites.map( favorite => {
                    return (
                        <div key={favorite._id} className="favorites__content">
                            <span>{favorite.title}</span>
                            <span>{favorite.director}</span>
                            <img src={`/filmposters/${favorite.image}`}
                                alt={favorite.title} className="img-fluid img-thumbnail" />
                            <button className="remove__fav" onClick={() => removeFavorited( favorite._id )}>Remove</button>
                        </div>
                    )
                } )
            }
        </div>
    )
}
