import decode from 'jwt-decode'

export default class AuthHelper {
    constructor() {
    }
    login = ( email, password ) => {
        return this.fetch( '/login', {
            method: 'POST',
            body: JSON.stringify( {
                email,
                password
            } )
        } ).then( res => {
            console.log( res )
            this.setToken( res.token )
            return Promise.resolve( res )
        } )
    }
}