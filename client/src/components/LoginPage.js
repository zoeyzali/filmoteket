import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { login } from './UserFunctions'

class Login extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            loggedIn: false,
            modal: false,
            text: 'Sign In!',
            user: {
                email: '',
                password: '',
            }
        }
    }

    checkForLogin = () => {
        const userData = localStorage.getItem( 'token' )
        if ( userData && this.state.loggedin !== true ) {
            this.setState( {
                loggedIn: true
            } )
            this.props.loginStatus( true )
        }
    }

    toggle = () => {
        this.setState( prevState => ( { modal: !prevState.modal } ) )
    }

    handleLogin = () => {
        this.setState( { isLoggedIn: true } )
    }
    handleLogout = () => {
        this.setState( { isLoggedIn: false } )
    }

    handleChange = ( e ) => {
        this.setState( { [e.target.name]: e.target.value } )
    }

    onSubmit = ( e ) => {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        login( user )
            .then( data => {
                console.log( data, 'data response' )
                if ( user ) {
                    this.setState( { user: user, modal: false, isLoggedIn: true } )
                    console.log( user, 'my tralala user' )
                    this.props.history.push( '/user/profile' )
                } else {
                    if ( !user ) {
                        this.props.history.push( '/users/signup' )
                        console.log( 'Not found' )
                    }
                }
            } )
    }

    componentDidMount() {
        this.setState( {
            email: '',
            password: '',
        } )
    }

    render() {

        return (
            <>
                <Button className="nav-link" color="" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="" toggle={this.toggle}>
                        <div className="text-center font-weight-light">{this.state.text}</div>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit} className="justify-content-center p-3" >
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2" hidden>Email</Label>
                                <Input
                                    type="email"
                                    name="email" id="exampleEmail" placeholder="something@idk.cool"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2" hidden>Password</Label>
                                <Input className="mt-2" type="password" name="password" id="examplePassword" placeholder="don't tell!"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="justify-content-center">
                                <p><input type="checkbox" />{' '}
                                    Remember Me</p>
                            </FormGroup>
                            <Button type="submit" className="light">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}


export default withRouter( Login )