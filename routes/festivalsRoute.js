const express = require( 'express' )
const festivals = express.Router()
const Festival = require( '../models/Festival' )
const User = require( '../models/User' )

festivals.get( '/', ( req, res ) => {
    res.send( "Les cinematique" )
} )


festivals.post( '/addFestival', async ( req, res ) => {
    console.log( "festivals/addFestival" )

    let image = req.body.image
    if ( !req.body.image ) {
        image = `https://via.placeholder.com/300x300?text=Lescinematique`
    }
    let festival = new Festival( {
        ...req.body,
        image,
    } )
    try {
        await festival.save()
        console.log( "Succes: ", festival )
        res.status( 200 ).json( {
            festival,
            successMssg: "successfully added"
        } )
    } catch ( error ) {
        res.json( { error: error } )
    }
} )


module.exports = festivals