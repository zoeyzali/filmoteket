const express = require( 'express' )
const users = express.Router()
const encryptPassword = require( '../config/encryptPassword' )
const User = require( '../models/User' )
const Film = require( '../models/Film' )



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
    try {
        let user = await User.findOne( { email, password } )
        if ( user && user.password === password ) {
            // console.log( 'userLogin', user )
            req.session.user = user
            res.status( 200 ).json( {
                successMssg: "Login success",
                user
            } )
        } else {
            return res.status( 400 ).json( { errorMssg: "Email or Password is Incorrect" } )
        }
    } catch ( err ) {
        console.error( err.message )
        res.status( 500 ).send( 'Server Error' )
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


users.get( '/', async ( req, res ) => {
    let users = await User.find()
    res.status( 200 ).json( users )
} )


// Delete a user by ID
users.delete( '/:id', async ( req, res ) => {
    const { user } = await req.session
    if ( !user ) {
        return res.status( 400 ).send( 'How did you get in here?' )
    }
    // console.log( req.session, "session delete" )
    let userToBeDeleted = await User.findByIdAndRemove( req.params.id )
    if ( user._id !== userToBeDeleted._id ) {
        return res.status( 400 ).json( { errorMssg: 'No Go' } )
    }
    if ( !userToBeDeleted ) {
        return res.status( 400 ).json( 'User not found' )
    } else {
        return res.status( 200 ).json( {
            successMssg: "User deleted",
            user: req.params.id
        } )
    }
} )


users.post( '/:id/create-favorite', async ( req, res ) => {
    // console.log( req.body )
    const { user } = await req.session
    if ( !user ) {
        return res.status( 400 ).json( { errorMssg: "You aren't logged in" } )
    }
    const currentUser = await User.findById( user._id )
    const favoriteFilm = await Film.findOne( req.body )

    if ( !favoriteFilm ) {
        return res.status( 500 ).json( {
            success: false,
            errorMssg: "Couldn't find film"
        } )
    }
    if ( currentUser.lists.includes( favoriteFilm._id ) ) {
        return res.status( 500 ).json( {
            success: false,
            errorMssg: "Film already exists in the list"
        } )
    } else {
        currentUser.lists.push( favoriteFilm )
        await currentUser.save()
        res.status( 200 ).json( {
            success: true,
            successMssg: "Film added",
            favoriteFilm
        } )
        // console.log( currentUser, "currUser" )
        // res.status.end()
    }
} )


users.get( '/:id/favorites', async ( req, res ) => {
    const { user } = await req.session
    if ( !user ) {
        return res.status( 400 ).json( {
            errorMssg: "You are not logged in"
        } )
    }
    try {
        const currentUser = await User.findById( req.params.id )
            .populate( "lists", "_id title synopsis director release_date image" )
        if ( user._id !== req.params.id ) {
            return res.status( 400 ).json( {
                errorMssg: "Double check credentials"
            } )
        } else {
            res.status( 200 ).json( {
                successMssg: "Success",
                lists: currentUser.lists,
                // user: currentUser
            } )
            console.log( currentUser.lists, "res list" )
        }
    } catch ( error ) {
        res.status( 500 ).send( error )
    }
} )

users.delete( '/favorites/:id', async ( req, res ) => {
    const { user } = await req.session
    if ( !user ) {
        return res.status( 400 ).json( { errorMssg: "You need to login" } )
    }
    try {
        let favToDelete = await Film.findById( req.params.id )
        const currentUser = await User.findById( user._id )
        if ( !favToDelete || favToDelete._id === null ) {
            return res.status( 400 ).json( {
                success: false,
                errorMssg: "favToDelete can't be deleted?"
            } )
        }
        if ( currentUser.lists.includes( favToDelete._id ) ) {
            currentUser.lists.splice( currentUser.lists.indexOf( favToDelete._id ), 1 )
            await currentUser.save()
            return res.status( 200 ).json( {
                success: true,
                successMssg: `${favToDelete} removed from favorites list`
            } )
        }
    } catch ( error ) {
        console.log( error )
        return res.status( 500 ).send( error )
    }
} )

// users.get( '/:id', async ( req, res ) => {
//     const { user } = await req.session
//     if ( !user ) {
//         return res.status( 400 ).json( {
//             errorMssg: "Not logged in"
//         } )
//     }
//     try {
//         const currentUser = await User.findById( req.params.id ).populate( 'lists', "title synopsis director release_date" )
//         if ( user._id !== req.params.id ) {
//             return res.status( 400 ).json( {
//                 errorMssg: "Credentials failed"
//             } )
//         } else {
//             return res.status( 200 ).json( {
//                 successMssg: "Populated lists success?",
//                 user: currentUser,

//             } )
//         }
//     } catch ( error ) {
//         return res.status( 500 ).send( error )
//     }
// } )


module.exports = users