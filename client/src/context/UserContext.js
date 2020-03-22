import React, { Component } from 'react'

export const UserContext = React.createContext()

class UserProvider extends Component {
    state = {
        user: {}
    }

    isAuthenticated = user => {
        this.setState( {
            user: user
        } )
    }

    logOutUser = () => {
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
                    logOutUser: this.logOutUser
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer


export { UserProvider, UserConsumer } 