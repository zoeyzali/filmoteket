import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'


export const AuthHelper = ( props ) => {
    const { isAuthenticated } = useContext( UserContext )
    const [isLoading, setIsLoading] = useState( true )

    const checkLogin = async () => {
        try {
            const response = await fetch( '/users/login' ).catch( err => console.log( err, "errrrrrr" ) )
            const result = { user: await response.json(), status: response.status }
            // console.log( result, "result" )
            if ( result.user ) {
                isAuthenticated( result.user )
            }
            setIsLoading( false )
        }
        catch ( e ) {
            setIsLoading( false )
        }
    }

    useEffect( () => {
        checkLogin()
    }, [] )


    if ( isLoading )
        return (
            <div className="loading-bar pt-6">
                <p className="text-center mt-3 display-2">Loading...</p>
            </div>
        )

    return (
        <div>
            {props.children}
        </div>
    )
}
