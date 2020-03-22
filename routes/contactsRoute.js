const express = require( 'express' )
const contact = express.Router()
const nodemailer = require( 'nodemailer' )


contact.post( '/contact/form', ( req, res ) => {
    console.log( req.body )
    nodemailer.createTestAccount( ( err, account ) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
                <ul>
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p> 
                `
        let transporter = nodemailer.createTransport( {
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'poopie@ethereal.email',
                pass: process.env.emailPass
            }
        } )

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'poopie@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail( mailOptions, ( err, info ) => {
            if ( err ) {
                console.log( err, "something aint right" )
            }
            console.log( 'Message sent:  %s', info.message )
            console.log( 'Message URL: %s', nodemailer.getTestMessageUrl( info ) )
        } )
    } )
} )

module.exports = contact