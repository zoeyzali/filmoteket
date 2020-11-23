const express = require( 'express' )
const lists = express.Router()
const User = require( '../models/User' )
const List = require( '../models/List' )

lists.post( '/listNumber', ( req, res ) => {
    List.find( { 'filmId': req.body.filmId } )
        .exec( ( err, subscribe ) => {
            if ( err ) return res.status( 400 ).send( err )
            res.status( 200 ).json( { success: true, subscribeNumber: subscribe.length } )
        } )
    console.log( res, "res" )
} )

lists.post( '/:userId/addToList', async ( req, res ) => {
    // const film = await Film.find()
    const { user } = req.session
    console.log( user )

    if ( !user ) {
        return res.status( 400 ).json( {
            error: "You need to login first"
        } )
    }
    const currentUser = await User.findById( user._id )
    console.log( currentUser, "currUser" )
    // const film = Film.findById( film._id )
    const list = new List( req.body )
    list.save( ( err, doc ) => {
        if ( err ) return res.status( 400 ).json( {
            success: false, err
        } )
        return res.status( 200 ).json( {
            success: true,
            list: doc,
            user
        } )
    } )
} )

lists.get( '/', async ( req, res ) => {
    let lists = await List.find()
    res.status( 200 ).json( { lists, count: lists.length } )
} )

module.exports = lists