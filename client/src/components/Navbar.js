import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap'
import logo from '../images/logo-2.png'
import Login from './LoginPage'
import Logout from './Logout'
// import Registration from './Registration'
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
        const { user } = this.context
        return (
            <Navbar className="container navbar-main" light expand="md">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt={logo} className="logo" />
                        filmkollen
                        </a>
                <NavbarToggler
                    id="nav-toggle-icon"
                    onClick={this.toggle}
                />
                <Collapse
                    isOpen={this.state.isOpen} navbar>
                    <Nav
                        className="ml-auto" navbar>
                        <NavLink className="nav-link" exact to="/">
                            Home
                            </NavLink>
                        <NavLink className="nav-link" to="/films">
                            Films
                            </NavLink>
                        <NavLink className="nav-link" to="/festivals">
                            Festivals
                            </NavLink>
                        <NavLink to="/profile" className="nav-link">
                            {user && !user.status ? user.firstName + " " + user.lastName : "Profile"}
                        </NavLink>
                        {!user.status ? (
                            <Logout />
                        ) : (
                                <Login />
                            )
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default AppNavbar

/**
<NavItem>
<NavLink className="nav-link" to="/contact">Contact</NavLink>
</NavItem>
const loginRegLink = (
            <ul className="mx-auto">
                <li className="nav-item">
                    <Registration />
                </li>
            </ul>
        )
                const userLink = (
            <ul className="">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
            </ul>
        )
{user ? userLink : loginRegLink}
 */