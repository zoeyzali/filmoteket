const express = require( 'express' )
const users = express.Router()
const encryptPassword = require( '../config/encryptPassword' )
const User = require( '../models/User' )



users.post( '/signup', async ( req, res ) => {
    const { email, password } = req.body
    const user = new User( {
        ...req.body,
        password: encryptPassword( password )
    } )
    let emailCheck = await User.findOne( { email: email } )
    if ( emailCheck ) {
        return res.status( 500 ).json( { errorMssg: "Email already exists" } )
    }
    try {
        await user.save()
        res.json( {
            successMssg: "User successfully registered",
            user: `${user.firstName} and ${user.lastName}`,
            // user,
            email: user.email
        } )
    } catch ( error ) {
        return res.status( 400 ).json( error, "signup error" )
    }
} )

users.post( '/login', async ( req, res ) => {
    let { email, password } = req.body
    password = encryptPassword( password )
    let user = await User.findOne( { email, password } )

    if ( user && user.password === password ) {
        // console.log( 'userLogin', user )
        req.session.user = user
        return res.status( 200 ).json( {
            successMssg: "Login success",
            user: `${user.firstName} ${user.lastName} ${user.email}`
        } )
    } else {
        return res.status( 400 ).json( { errorMssg: "Email or Password is incorrect" } )
    }
} )

users.get( '/login', ( req, res ) => {
    res.json( req.session.user ?
        req.session.user :
        { status: 'not logged in' }
    )
} )

users.get( '/logout', ( req, res ) => {
    const { user } = req.session
    if ( user ) {
        req.session.destroy()
        res.status( 200 ).end()
    } else {
        return res.status( 400 ).end()
    }
} )

users.get( '/', ( req, res ) => {
    const user = req.session.user
    if ( user && user.isAdmin === true ) {
        allUsers = User.find()
        res.status( 200 ).send( allUsers )
    } else {
        res.status( 400 ).send( "Tut Tut" )
    }
} )

users.get( '/', ( req, res ) => {
    let users = User.find()
    res.json( users, 'respond with a resource' )
} )



// Delete a user by ID
users.delete( '/:id', ( req, res ) => {
    User.findByIdAndRemove( req.params.id )
        .then( () => {
            res.status( 200 ).json( {
                message: "User deleted",
                user: req.params.id
            } )
        } )
        .catch( err => res.status( 400 ).json( 'error: ' + err ) )
} )



module.exports = users