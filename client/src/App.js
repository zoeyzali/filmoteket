import React from 'react'
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
import CreateFestival from './components/CreateFestival'
import PrivateRoute from './components/PrivateRoute'
import { AuthHelper } from './components/AuthHelper'
import { FilmDetails } from './components/FilmDetails'

export default function App() {
    return (
        <Router>
            <AuthHelper>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={StartPage}
                        />
                        <Route path="/films/" component={FilmsParentContainer}
                        />
                        <Route path="/films/cannes" component={FilmsCannes}
                        />
                        <Route path="films/berlinale" component={FilmsBerlinale}
                        />
                        <Route path="/festivals" component={FestivalsPage}
                        />
                        <Route exact path="/add" component={CreateFestival}
                        />
                        <Route path="/contact" component={ContactPage}
                        />
                        <Route path="/movies/berlinale/:id" component={FilmDetails}
                        />
                        <PrivateRoute path="/profile" component={Profile}
                        />
                    </Switch>
                    <Footer />
                </div>
            </AuthHelper>
        </Router>
    )
}