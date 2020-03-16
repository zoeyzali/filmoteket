const express = require( 'express' )
const app = express()
const cors = require( 'cors' )
const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )
const URI = require( './connectionString' )
const cookieParser = require( 'cookie-parser' )
const Port = process.env.PORT || 3001
const session = require( 'express-session' )
const connectMongo = require( 'connect-mongo' )( session )
const User = require( './routes/users' )
const Contact = require( './routes/contact' )
const Film = require( './routes/films' )
const salt = "$URthe$altOfThe€arth$"


app.use( bodyParser.json() )
app.use( cors( { credentials: true } ) )
app.use( bodyParser.urlencoded( {
    extended: false
} ) )
app.use( cookieParser() )

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
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true },
    store: new connectMongo( {
        mongooseConnection: db
    } )
} ) )

app.use( '/users', User )
app.use( '/contact', Contact )
app.use( '/films', Film )

/** for later use */
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) )
}

app.get( '/', ( req, res ) => {
    let serverText = `<h1>filmoteket<h1/>`
    res.send( serverText )
} )

app.listen( Port, function () {
    console.log( 'Server is running on port: ' + Port )
} )