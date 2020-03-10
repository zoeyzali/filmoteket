const express = require( 'express' )
const app = express()
const cors = require( 'cors' )
const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )
const URI = require( './connectionString' )
const cookieParser = require( 'cookie-parser' )
const Port = process.env.PORT || 3001

const User = require( './routes/users' )
const Contact = require( './routes/contact' )

app.use( bodyParser.json() )
app.use( cors() )
app.use( bodyParser.urlencoded( {
    extended: false
} ) )

app.use( cookieParser() )

mongoose.connect(
    URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
} )
mongoose.Promise = global.Promise


app.use( '/users', User )
app.use( '/contact', Contact )


//middleware functions
// app.use( ( req, res, next ) => {
//   const error = new Error( 'Check Other Routes' )
//   error.status = 404
//   next( error )
// } )

app.use( ( error, req, res, next ) => {
    res.status( error.status || 500 )
    res.json( {
        error: {
            message: error.message
        }
    } )
} )
app.listen( Port, function () {
    console.log( 'Server is running on port: ' + Port )
} )