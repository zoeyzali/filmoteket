import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Alert } from 'reactstrap'
import Registration from './Registration'


class Login extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            modal: false,
            mssg: "",
            emailErr: false,
            passErr: false,
        }
    }

    toggle = () => {
        this.setState( prevState => ( {
            modal: !prevState.modal
        } ) )
    }

    handleChange = ( e ) => {
        e.preventDefault()
        this.setState( {
            [e.target.name]: e.target.value
        } )
    }

    handleLogin = ( e ) => {
        e.preventDefault()
        const { email, password } = this.state
        // const { history } = this.props
        if ( email === "" || !email ) {
            return this.setState( {
                emailErr: true,
                modal: true,
            } )
        }
        if ( password === "" || !password ) {
            return this.setState( {
                passErr: true,
                modal: true,
                emailErr: false,
            } )
        }
        fetch( '/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                email: email,
                password: password
            } )
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data, 'data login data' )
                if ( data.errorMssg ) {
                    return this.setState( {
                        emailErr: false,
                        passErr: false,
                        modal: true,
                        loggedIn: false,
                        mssg: data.errorMssg,
                    } )
                } else {
                    this.setState( {
                        email: data.email,
                        password: data.password,
                        mssg: data.successMssg,
                        modal: true,
                        emailErr: false,
                        passErr: false,
                        loggedIn: true,
                    } )
                    localStorage.setItem( 'user', JSON.stringify( data.user ) )
                }
            } )
            .catch( error => this.setState( {
                modal: true,
                loggedIn: false,
                mssg: error,
                error
            } ) )
        // this.props.history.push( `/profile` )
    }

    toggleToggle = () => {
        this.setState( {
            loggedIn: this.state.loggedIn === true ? window.location.replace( '/profile' ) : null
        } )
    }

    // componentDidMount() {
    //     this.setState( {
    //         modal: false
    //     } )
    // }

    render() {
        const { emailErr, passErr, mssg, loggedIn } = this.state
        const errorMssg = "Field cannot be empty"


        return (
            <React.Fragment>
                <Button
                    onClick={this.toggle}
                    // color="light"
                    className="login-btn btn btn-outline"
                >
                    Login
                    </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    fade={true}
                    className={this.props.className}
                >
                    <ModalHeader
                    >
                        <div className="">
                            <h2>Sign In</h2>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        {loggedIn ? <Alert
                            className="mssg"
                            style={{ color: "green" }}
                            toggle={this.toggleToggle}
                        >
                            {mssg}
                        </Alert> : <span
                            className="mssg text-center"
                            style={{ color: "red" }}>
                                {mssg}
                            </span>
                        }
                        <Form onSubmit={this.handleLogin}
                            className="text-center p-3">
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="something@idk.cool"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                {emailErr && <span className="error-mssg py-1">
                                    {errorMssg}
                                </span>
                                }
                            </FormGroup>

                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    className="mt-2"
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="don't tell!"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                {passErr && <span className="error-mssg py-1">
                                    {errorMssg}
                                </span>
                                }
                            </FormGroup>
                            <FormGroup className="">
                                <input type="checkbox" /> {" "}
                                <span>Remember Me</span>
                                <br />
                                <span>Not a member?</span>
                                <Registration />
                            </FormGroup>

                            <Button type="submit"
                                color="light"
                                onClick={this.toggle}>
                                SUBMIT
                                </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}




export default Login