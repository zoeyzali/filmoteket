const express = require( "express" )
const films = express.Router()
const Film = require( '../models/Film' )
<<<<<<< HEAD
const axios = require( 'axios' )
=======
// const axios = require( 'axios' )
// testing environment vars
// console.log( `Logging your port at port ${port} ` )
>>>>>>> 62e9490aa586cd5a392b896e952a634cf04283e5

films.get( '/', async ( req, res ) => {
    let films = await Film.find( {} )
    if ( films ) {
        res.status( 200 ).json( {
            mssg: "Yao Bruv",
            films: films
        } )
        console.log( res )
    } else {
        return res.status( 400 ).json( { errorMssg: "No films found" } )
    }
} )

<<<<<<< HEAD
films.get( '/berlinale/', async ( req, res ) => {
    const response = await axios.get(
        `https://api.themoviedb.org/4/list/112863?api_key=${process.env.API_KEY}` )
    const result = await res.status( 200 ).json( {
        films: await response.data
    } )
    console.log( response.data, "result" )
    res.status( 200 ).json( result )
} )
=======

// films.get( '/berlinale/', async ( req, res ) => {
//     const response = await axios.get(
//         `https://api.themoviedb.org/4/list/112863?api_key=${process.env.API_KEY}` )
//     const result = await res.status( 200 ).json( {
//         films: response.data
//     } )
//     console.log( response.data, "result" )
//     res.status( 200 ).json( result )
// } )
>>>>>>> 62e9490aa586cd5a392b896e952a634cf04283e5

module.exports = films

/**films.post('/users/favorites/new', db.addFavorite)
films.get('/users/:id/favorites', db.getAllFavorites)
films.delete('/users/:id/favorites/:movie_id', db.deleteFavorite)
 */