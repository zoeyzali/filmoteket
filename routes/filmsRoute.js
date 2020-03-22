const express = require( "express" )
const films = express.Router()
const { apiKey, port } = require( '../config/variableKeys' )

// testing environment vars
console.log( `Logging your port at port ${port} ` )

films.get( '/', ( req, res ) => {
  res.json( {
    message: "Yao Bruv"
  } )
} )

// films.get( '/berlinale/', async ( req, res ) => {
//   const response = await axios.get( 
// `https://api.themoviedb.org/4/list/112863?api_key=${apiKey}` )
//   const result = await res.status( 200 ).json( {
//     films: await response.data
//   } )
//   console.log( response.data, "result" )
// } )



films.post( '/', async ( req, res ) => {
} )

module.exports = films





/**router.post('/users/favorites/new', db.addFavorite)
router.get('/users/:id/favorites', db.getAllFavorites)
router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite)
 */