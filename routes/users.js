const express = require( 'express' )
const users = express.Router()
const cors = require( 'cors' )
const bcrypt = require( 'bcrypt' )
const jwt = require( 'jsonwebtoken' )

const User = require( '../models/User' )
users.use( cors() )

users.get( '/', async ( req, res ) => {
    let allUsers = await User.find()
    res.status( 200 ).send( allUsers )
} )

users.post( '/signup', ( req, res ) => {
    const today = new Date()
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        created: today
    }
    User.findOne( {
        email: req.body.email
    } )
        .then( user => {
            if ( !user ) {
                bcrypt.hash( req.body.password, 10, ( err, hash ) => {
                    userData.password = hash
                    User.create( userData )
                        .then( user => {
                            console.log( userData, 'logg userdata' )
                            res.json( {
                                user,
                                status: user.email + ' ' + user.firstName + ' ' + 'Registered!'
                            } )
                        } )
                        .catch( err => {
                            res.send( 'error: ' + err )
                        } )
                } )
            } else {
                res.json( { error: 'User already exists' } )
            }
        } )
        .catch( err => {
            res.send( 'error: ' + err )
        } )
} )


users.post( '/login', ( req, res ) => {
    User.find( { email: req.body.email, password: req.body.password } )
        .exec()
        .then( user => {
            console.log( user )

            if ( !user ) {
                return res.status( 401 ).json( {
                    message: 'Auth failed'
                } )
            }
            bcrypt.compare( req.body.password, password, ( err, result ) => {
                if ( err ) {
                    return res.status( 401 ).json( {
                        message: 'Auth failed'
                    } );
                }
                if ( result ) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        } )
                    return res.status( 200 ).json( {
                        message: 'Auth successful',
                        token: token,
                        user: {
                            email: user[0].email,
                        }
                    } )
                }
                res.status( 401 ).json( {
                    message: 'Auth failed'
                } );
            } )
        } )
        .catch( err => {
            console.log( err )
            res.status( 500 ).json( {
                error: err
            } )
        } )
} )


// users.post( '/login', ( req, res ) => {
//   User.find( {
//     email: req.body.email
//   } )
//     .exec()
//     .then( user => {
//       if ( user ) {
//         console.log( user, 'my MF user' )
//         if ( bcrypt.compareSync( req.body.password, user.password ) ) {
//           //password match
//           const payload = {
//             _id: user._id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email,
//           }
//           let token = jwt.sign( payload, process.env.JWT_KEY, {
//             expiresIn: '1h'
//           } )
//           res.send( {
//             token: token,
//             user: user,
//           } )
//         } else {
//           res.json( {
//             error: 'User does not exist'
//           } )
//         }
//       } else {
//         res.json( {
//           error: 'User does not exist'
//         } )
//       }
//     } )
//     .catch( err => {
//       res.send( 'error: ' + err )
//     } )
// } )

users.get( '/', ( req, res ) => {
    let users = User.find()
    res.json( users, 'respond with a resource' )
} )

users.get( '/profile/', ( req, res ) => {
    let id = req.params._id
    User.find( req.userData, ( err, users ) => {
        console.log( users, 'all user' )
        res.send( { users: users, message: 'Boohoo' } );
    } )
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