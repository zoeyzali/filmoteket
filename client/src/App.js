import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StartPage from './components/StartPage'
import FilmsParentContainer from './components/FilmsParentContainer'
import FilmsCannes from './components/FilmsCannes'
import FilmsBerlinale from './components/FilmsBerlinale'
import FestivalsPage from './components/FestivalsPage'
import ContactPage from './components/ContactPage'
import Profile from './components/Profile'
// import LoginPage from './components/LoginPage'
import CreateFestival from './components/CreateFestival'
// import PrivateRoute from './components/PrivateRoute'
// import LoginContainer from './components/LoginContainer'
import { AuthHelper } from './components/AuthHelper'


export default function App() {
    return (
        <React.Fragment>
            <AuthHelper>
                <Navbar />
                <section className="container">
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
                        <Route exact path="/add" component={CreateFestival}
                        />
                        <Route path="/contact" component={ContactPage}
                        />
                        <Route path="/profile" component={Profile}
                        />
                    </Switch>
                    <Footer />
                </section>
            </AuthHelper>
        </React.Fragment>
    )
}



//<Route path="/login" render={() => <LoginPage />} />
//    <Route path="/login" component={LoginPage}
// />