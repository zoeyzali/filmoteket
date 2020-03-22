const dotenv = require( 'dotenv' )
dotenv.config()
console.log( `My test var is ${process.env.TEST_VAR} ` )

const express = require( 'express' )
const app = express()
const mongoose = require( 'mongoose' )
const cors = require( 'cors' )
const URI = require( './connectionString' )
const session = require( 'express-session' )
const MongoStore = require( 'connect-mongo' )( session )
const salt = "$URthe$altOfThe€arth$"
const Port = process.env.PORT || 4000

const User = require( './routes/usersRoutes' )
const Contact = require( './routes/contactsRoute' )
const Film = require( './routes/filmsRoute' )
const Festival = require( './routes/festivalsRoute' )

app.use( cors() )
app.use( express.json() )

app.get( '/', ( req, res ) => {
    let serverText = `<h1>filmoteket<h1/>`
    res.send( serverText )
} )

/** for later use */
// if ( process.env.NODE_ENV === 'production' ) {
//     app.use( express.static( 'client/build' ) )
// }

const db = mongoose.connection
mongoose.connect(
    URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
} )
    .then( () => console.log( "DB is ON" ) )
    .catch( err => console.log( "DB messing it up", err ) )
mongoose.Promise = global.Promise

app.use( session( {
    secret: salt,
    resave: false, // if unmodifieds
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true
    },
    store: new MongoStore( {
        mongooseConnection: db
    } )
} ) )

app.use( '/users', User )
app.use( '/contact', Contact )
app.use( '/films', Film )
app.use( '/festivals', Festival )





app.listen( Port, () => {
    console.log( `Server running at ${Port}` )
} )

module.exports = app