import axios from 'axios'

export const register = ( newUser ) => {
    return axios
        .post( 'users/signup', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
        } )
        .then( response => {
            console.log( response, 'Registered' )
            return response.data
        } )
}

export const login = ( user ) => {
    return axios
        .post( 'users/login', {
            email: user.email,
            password: user.password,
            token: user.token,
        } )
        .then( response => {
            localStorage.setItem( 'token', JSON.stringify( response ) )
            console.log( response.data, 'brap brap' )
            return response.data
        } )
        .catch( err => {
            console.log( err, 'error detected' )
        } )
}

export const getProfile = ( token ) => {
    return axios
        .get( '/user/profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } )
        .then( response => {
            console.log( response.data.users[0], 'res getProfile' )
            return response.data.users
        } )
        .catch( err => {
            console.log( err, 'wtf man' )
        } )
}

