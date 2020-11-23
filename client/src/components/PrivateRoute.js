import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom"
import { UserContext } from '../context/UserContext'

const PrivateRoute = ( { component: Component, ...rest } ) => {
    const { user } = useContext( UserContext )
    const routeProps = {
        ...rest,
        render: ( props ) => {
            return user && !user.status ? <Component{...props} /> : <Redirect to="/" />
        }
    }
    return <Route {...routeProps}
    />
}

export default PrivateRoute