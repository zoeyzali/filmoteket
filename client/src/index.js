import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './scss/style.scss'
import { UserProvider } from './context/UserContext'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <UserProvider>
        <Router>
            <App />
        </Router>
    </UserProvider>, document.getElementById( 'root' ) )
serviceWorker.unregister()
