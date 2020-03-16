import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LoginPage from './LoginPage'

class LoginContainer extends Component {
    constructor( props ) {
        super( props )
        if ( props.user ) {
            alert( "You can't login again" )
            props.history.push( "/profile" )
        }
    }
    render() {
        return <LoginPage />
    }
}

export default withRouter( LoginContainer )