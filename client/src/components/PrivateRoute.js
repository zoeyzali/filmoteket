import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom"
// import { checkLogin } from './AuthHelper'
import UserContext from '../context/UserContext'

const PrivateRoute = ( { component: Component, ...rest } ) => {
    const { user } = useContext( UserContext )
    return (
        <Route {...rest} render={props => (
            user ? <Component{...props} />
                : <Redirect to="/" />
        )}
        />
    )
}

export default PrivateRoute