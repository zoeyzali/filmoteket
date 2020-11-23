const dotenv = require( 'dotenv' )
dotenv.config()

module.exports = {
    apiKey: process.env.API_KEY,
    PORT: process.env.PORT
}