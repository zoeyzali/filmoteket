import React, { Component } from 'react'
import { withRouter, Link, NavLink } from "react-router-dom"
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem
} from 'reactstrap'
import logo from '../images/filmkollenLogo.png'
import Login from './LoginPage'
import Registration from './Registration'


class AppNavbar extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isOpen: false,
            visible: false,
            loggedIn: false,
        }
    }

    menu = ( userData ) => {
        if ( userData !== this.state.user ) {
            this.setState( {
                user: userData
            } )
            // console.log( userData, 'sup data' )
        }
    }

    logOut = ( e ) => {
        e.preventDefault()
        localStorage.removeItem( 'token' )
        this.props.history.push( '/' )
        console.log( localStorage )
    }


    toggle = () => {
        this.setState( {
            isOpen: !this.state.isOpen
        } )
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav mx-auto">
                <li className="nav-item login-btn">
                    <Login />
                </li>
                <li className="nav-item">
                    <Registration />
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/users/profile" className="nav-link">
                        Profile
          </Link>
                </li>
                <li className="nav-item log-out">
                    <Link to="/" onClick={this.logOut} className="nav-link">
                        Logout
          </Link>
                </li>
            </ul>
        )

        return (
            <div>
                <Navbar className="navbar-main" light expand="lg">
                    <div href="/" className="navbar-brand">
                        <img src={logo} alt={logo} className="logo" />
                        filmkollen</div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/films">Films</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/festivals">Festivals</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </NavItem>

                            {localStorage.token ? userLink : loginRegLink}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }
}

export default withRouter( AppNavbar );