import React, { useContext } from 'react'
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ( { component: Component, ...rest } ) => {
    const { user } = useContext()

    const routeProps = {
        ...rest,
        render: ( props ) => {
            return user ? <Component{...props} />
                : <Redirect to="/login" />
        },
    }
    return < Route {...routeProps} />
}

export default PrivateRoute