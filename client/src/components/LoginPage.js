import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

class Login extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            loggedIn: false,
            modal: false,
            text: 'Sign In!',
            user: {
                email: '',
                password: '',
            },
            mssg: "",
            emailErr: false,
            passErr: false,
        }
        const { user, isAuthenticated } = UserContext
        console.log( user, isAuthenticated, 'from login' )
    }


    toggle = () => {
        this.setState( prevState => ( {
            modal: !prevState.modal,
            mssg: ""
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
        const { history } = this.props
        if ( email === "" || !email ) {
            return this.setState( {
                emailErr: true,
                modal: true,
                // mssg: ""
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
            .then( res => {
                if ( res.ok ) {
                    // console.log( res, "just res" )
                    return res.json()
                } else {
                    if ( !res || res === undefined )
                        return this.setState( {
                            modal: true,
                            loggedIn: false,
                            mssg: ""
                        } )
                }
            } )
            .then( data => {
                console.log( data, 'loginResp' )
                this.setState( {
                    user: data,
                    mssg: data.successMssg,
                    modal: false,
                    emailErr: false,
                    passErr: false,
                    loggedIn: true,
                } )
                if ( !data ) {
                    return this.setState( {
                        modal: true,
                        loggedIn: false,
                        mssg: "Bull"
                    } )
                }
                else {
                    this.setState( {
                        loggedIn: true,
                        user: data.user
                    } )
                }
            }
            )
            .catch( error => this.setState( {
                modal: true,
                loggedIn: false,
                error
            } ) )
        history.push( `/profile` )
    }

    componentDidMount() {
        this.setState( {
            email: '',
            password: '',
            emailErr: false,
            passErr: false,
            modal: false,
            loggedIn: true
        } )
    }

    render() {
        const { emailErr, passErr, mssg, loggedIn } = this.state
        // const { isAuthenticated } = this.state.user
        // console.log( isAuthenticated, "mssg & user" )

        const errorMssg = "Field cannot be empty"
        const confirmationMssg = "All good"
        const errorish = "Please double check email or password" + mssg

        return (
            <div>
                <Button
                    className="nav-link login-btn"
                    onClick={this.toggle}
                    color="light"
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
                        className=""
                        toggle={this.toggle}>
                        <div className="">
                            <h2>{this.state.text}</h2>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        {!loggedIn ? <span className="mssg" style={{ color: "red" }}>
                            {errorish}
                        </span>
                            : null
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
                            </FormGroup>
                            <Button type="submit"
                                mssg={confirmationMssg}
                                className="light"
                                onClick={this.toggle}>Submit
                                </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


//<span className="mssg" style={{ color: "green" }}>
// { confirmationMssg }
//  </span>  

export default withRouter( Login )