const express = require( "express" )
const films = express.Router()
const axios = require( 'axios' )
const { tmdbKey } = require( '../config/variableKeys' )


films.get( '/', ( req, res ) => {
    res.send( "Films test" )
} )

films.get( '/berlinale/', async ( req, res ) => {
    const response = await axios.get( `https://api.themoviedb.org/4/list/112863?api_key=${tmdbKey}` )
    res.json( response.data.results[0] )
    console.log( res )
        .catch( ( err => console.log( "error" ) ) )
} )

module.exports = films


/**async function someFunction() {
  try {
    await someOtherFunction()
  } catch (err) {
    console.error(err.message)
  }
} */