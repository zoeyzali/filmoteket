const dotenv = require( 'dotenv' )
dotenv.config()
// console.log( `My test variable is ${process.env.TEST_VAR} ` )

const express = require( 'express' )
const app = express()
const mongoose = require( 'mongoose' )
const cors = require( 'cors' )
const URI = require( '../connectionString' )
const session = require( 'express-session' )
const MongoStore = require( 'connect-mongo' )( session )
const salt = "$URthe$altOfThe€arth$"
const Port = process.env.PORT || 5000
const http = require( 'http' )
const User = require( './routes/usersRoutes' )
const Contact = require( './routes/contactsRoute' )
const Film = require( './routes/filmsRoute' )
const Festival = require( './routes/festivalsRoute' )
const List = require( './routes/listsRoute' )

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
    useUnifiedTopology: true,
    useFindAndModify: false
} )
    .then( () => console.log( "DB is ON" ) )
    .catch( err => console.log( "DB messin' it up", err ) )
mongoose.Promise = global.Promise

app.use( session( {
    secret: salt,
    resave: false, // if unmodified
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    },
    store: new MongoStore( {
        mongooseConnection: db
    } )
} ) )

const server = http.createServer( app )

app.use( '/users', User )
app.use( '/films', Film )
app.use( '/festivals', Festival )
app.use( '/contact', Contact )
app.use( '/lists', List )






server.listen( Port, () => {
    console.log( `Server running at ${Port}` )
} )

