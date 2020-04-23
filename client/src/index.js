import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './scss/style.scss'
import { UserContextProvider } from './context/UserContext'

ReactDOM.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>, document.getElementById( 'root' ) )
serviceWorker.unregister()
