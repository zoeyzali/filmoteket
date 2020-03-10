import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StartPage from './components/StartPage'
import FilmsParentContainer from './components/FilmsParentContainer'
import FilmsCannes from './components/FilmsCannes'
import FestivalsPage from './components/FestivalsPage'
import ContactPage from './components/ContactPage'
import Profile from './components/Profile'




export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route path="/films/" component={FilmsParentContainer} />
                <Route path="films/cannes" component={FilmsCannes} />
                <Route path="/festivals" component={FestivalsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/user/:userId/" component={Profile} />

                }
                <Footer />
            </Switch>
        </>
    )
}



