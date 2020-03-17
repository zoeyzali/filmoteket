import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import logo from '../images/logo-2.png'
import Login from './LoginPage'
import Registration from './Registration'
import { UserContext } from '../context/UserContext'



class AppNavbar extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            isOpen: false,
            visible: false,
        }
    }
    static contextType = UserContext


    toggle = () => {
        this.setState( {
            isOpen: !this.state.isOpen
        } )
    }

    render() {
        const { user, logOutUser } = this.context

        const loginRegLink = (
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
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
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
            </ul>
        )

        return (
            <div>
                <Navbar className="navbar-main" light expand="lg">
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt={logo} className="logo"
                        />
                        filmkollen</a>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link"
                                    exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                    to="/films">Films</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                    to="/festivals">Festivals</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"
                                    to="/contact">Contact</NavLink>
                            </NavItem>

                            {user ? userLink : loginRegLink}

                            <li className="nav-item logout-btn">
                                <Link to="/" onClick={logOutUser} className="nav-link">
                                    Logout
                                </Link>
                            </li>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar 