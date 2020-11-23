import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Logout = () => {
    const { logoutUser } = useContext( UserContext )

    const onLogout = async () => {
        logoutUser()
        const response = await fetch( '/users/logout' )
        if ( response.status === 200 ) {
            console.log( response, "user loggedout" )
        }
        window.location.replace( '/' )
    }

    return (
        <span onClick={onLogout} className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                style={{ maxHeight: "65px", maxWidth: "65px" }}
                className="logout-btn nav-link">
                <path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z" />
                <path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z" /></svg>
        </span>
    )
}

export default Logout