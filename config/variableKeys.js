const dotenv = require( 'dotenv' )
dotenv.config( { path: `.env.development` } )

module.exports = {
    tmdbKey: process.env.TMDB_API_KEY
}