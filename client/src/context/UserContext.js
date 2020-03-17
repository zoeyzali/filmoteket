import React, { createContext, Component } from 'react'
export const UserContext = createContext( { user: {} } )
export const UserConsumer = UserContext.Consumer
// export const UserContextProvider = UserContext.Provider

export class UserContextProvider extends Component {
    state = {
        user: {}
    }
    // const[user, setUser] = useState( "" )
    // const isAuthenticated = ( user ) => {
    //     setUser( user )
    // }
    // const destroyAuthUser = () => {
    //     setUser( "" )
    // }

    isAuthenticated = user => {
        this.setState( {
            user
        } )
    }
    logOutUser = () => {
        this.setState( {
            user: ""
        } )
    }

    render() {
        const { children } = this.props
        const { user } = this.state
        const { isAuthenticated, logOutUser } = this
        return (
            <UserContext.Provider
                value={{ user, isAuthenticated, logOutUser }}>
                {children}
            </UserContext.Provider>
        )
    }

}

export default UserContextProvider