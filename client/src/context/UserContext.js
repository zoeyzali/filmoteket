import React, { Component, createContext } from 'react'


export const UserContext = createContext()
class UserContextProvider extends Component {
    state = {
        user: {},
        // status: null
    }

    isAuthenticated = user => {
        this.setState( {
            user: user ? user : user.status
        } )
        // console.log( "user from isAuth Fn", user, user.status )
    }

    logoutUser = () => {
        this.setState( {
            user: ""
        } )
    }

    render() {
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    isAuthenticated: this.isAuthenticated,
                    logoutUser: this.logoutUser
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer


export { UserContextProvider, UserConsumer } 