import React, { Component } from 'react'
import { Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Login from './LoginPage'

class Registration extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            signUpMssg: '',
            isLoading: true,
            modal: false,
            nestedModal: false,
            closeAll: false,
        }
    }
    toggle = () => {
        this.setState( prevState => ( { modal: !prevState.modal } )
        )
    }

    toggleNested = () => {
        this.setState( {
            nestedModal: !this.state.nestedModal,
            closeAll: false
        } )
    }

    toggleAll = () => {
        this.setState( {
            nestedModal: !this.state.nestedModal,
            closeAll: true,
        } )
    }

    handleChange = ( event ) => {
        event.preventDefault()
        this.setState( {
            [event.target.name]: event.target.value
        } )
    }

    handleSubmit = ( event ) => {
        event.preventDefault()
        const {
            firstName,
            lastName,
            email,
            password,
            signUpMssg,
        } = this.state

        this.setState( {
            isLoading: true,
        } );

        // Post request to backend
        fetch( '/users/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                signUpMssg: signUpMssg,
            } ),
        } ).then( res => res.json() )
            .then( json => {
                console.log( 'json', json )
                if ( json.success ) {
                    this.setState( {
                        signUpMssg: json.successMssg,
                        isLoading: false,
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        closeAll: true,
                    } )
                } else {
                    this.setState( {
                        successMssg: json.errorMssg,
                        isLoading: false,
                    } )
                }
            } )
    }
    componentDidMount() {
        this.setState( {
            isLoading: false
        } )
    }

    render() {
        return (
            <div>
                <Button
                    className="nav-link"
                    color="light"
                    onClick={this.toggle}>
                    Sign Up
                    </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className="reg-modal">
                    <ModalHeader className="reg-header"
                        toggle={this.toggle}>
                        <div className="">
                            <h2> Create An Account</h2>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="text-center p-4">
                            <Form>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Jane"
                                        name="firstName"
                                        value={this.state.firstName} onChange={this.handleChange} />
                                    {/* <FormFeedback valid>Sweet! that is one cool name!</FormFeedback> */}
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        type="name"
                                        placeholder="Doe"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                    {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        type="email"
                                        placeholder="idk@something.com"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    { /* <FormFeedback>Type in a valid email</FormFeedback> */}
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        type="password"
                                        placeholder="don't tell"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                    { /* <FormFeedback valid>Sweet! that should do it!</FormFeedback> */}
                                </FormGroup>
                            </Form>

                            <div className="">
                                <span>
                                    Already a member?
                                 <Login text={this.props.text}
                                        style={{ display: "inline-block" }}
                                    />
                                </span>
                            </div>
                            <Button
                                type="submit"
                                className="btn btn-info mx-auto submit-btn"
                                onClick={this.toggleNested}>
                                Submit
                                </Button>
                            <Modal
                                isOpen={this.state.nestedModal}
                                toggle={this.toggleNested}
                                onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalBody className="nested-modal">
                                    <p className="text-center">
                                        Registration completed!
                                        </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="success"
                                        onClick={this.handleSubmit} onClosed={this.state.closeAll ? this.toggleAll : undefined}>
                                        Close All
                                        </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Registration