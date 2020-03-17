import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StartPage from './components/StartPage'
import FilmsParentContainer from './components/FilmsParentContainer'
import FilmsCannes from './components/FilmsCannes'
import FilmsBerlinale from './components/FilmsBerlinale'
import FestivalsPage from './components/FestivalsPage'
import ContactPage from './components/ContactPage'
import Profile from './components/Profile'
import UserContextProvider, { UserContext } from './context/UserContext'
import LoginPage from './components/LoginPage'
import { AuthHelper } from './components/AuthHelper'
// import PrivateRoute from './components/PrivateRoute'
// import LoginContainer from './components/LoginContainer'


export default function App() {
    const user = useContext( UserContext )
    return (
        <UserContextProvider value={user}>
            <Router>
                <AuthHelper>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={StartPage}
                            />
                            <Route path="/films/" component={FilmsParentContainer}
                            />
                            <Route path="films/cannes" component={FilmsCannes}
                            />
                            <Route path="films/berlinale" component={FilmsBerlinale}
                            />
                            <Route path="/festivals" component={FestivalsPage}
                            />
                            <Route path="/contact" component={ContactPage}
                            />
                            <Route path="/login" component={LoginPage}
                            />
                            <Route path="/profile" component={Profile}
                            />
                        </Switch>
                        <Footer />
                    </div>
                </AuthHelper>
            </Router>
        </UserContextProvider>
    )
}



//<Route path="/login" render={() => <LoginPage />} />
