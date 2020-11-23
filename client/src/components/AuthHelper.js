import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export const AuthHelper = ( props ) => {
    const { isAuthenticated } = useContext( UserContext )
    const [isLoading, setIsLoading] = useState( true )

    const checkLogin = async () => {
        try {
            const response = await fetch( '/users/login' )
                .catch( err => console.log( err, "profile error" ) )
            const result = {
                user: await response.json(),
                status: response.status
            }
            if ( result.user ) {
                isAuthenticated( result.user )
            } else {
                isAuthenticated( result.status )
                console.log( result.status, "status" )
            }
            setIsLoading( false )
        }
        catch ( e ) {
            setIsLoading( false )
        }
    }
    useEffect( () => {
        checkLogin()
        // eslint-disable-next-line 
    }, [] )

    if ( isLoading )
        return (
            <div className="loading pt-6">
                <p className="text-center mt-3 display-2 lead">Loading...</p>
            </div>
        )

    return (
        <div>
            {props.children}
        </div>
    )
}