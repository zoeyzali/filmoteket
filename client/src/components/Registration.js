import React, { Component } from 'react'
import { Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import Login from './LoginPage'
import { NavLink } from 'react-router-dom'

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
        this.setState( { modal: !this.state.modal } )
    }

    toggleNested = () => {
        this.setState( {
            nestedModal: !this.state.nestedModal,
            closeAll: false,
        } )
    }

    toggleAll = () => {
        this.setState( {
            nestedModal: !this.state.nestedModal,
            modal: !this.state.modal,
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
                // signUpMssg: signUpMssg,
            } ),
        } ).then( res => res.json() )
            .then( json => {
                console.log( 'json', json )
                if ( json.success ) {
                    this.setState( {
                        signUpMssg: json.successMssg,
                        // isLoading: false,
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        modal: false,
                        nestedModal: true
                    } )
                } else {
                    this.setState( {
                        successMssg: json.errorMssg,
                        // isLoading: false,
                        modal: true,
                    } )
                }
            } )
    }
    // componentDidMount() {
    //     this.setState( {
    //         isLoading: false,
    //     } )
    // }
    render() {
        return (
            <React.Fragment>
                <NavLink to=""
                    onClick={this.toggle}
                    className="reg-nav-link nav-link"
                >
                    Sign Up
                    </NavLink>
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
                            <Form
                            >
                                <FormGroup>
                                    <Input
                                        type="text"
                                        placeholder="Jane"
                                        name="firstName"
                                        value={this.state.firstName} onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        type="name"
                                        placeholder="Doe"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        type="email"
                                        placeholder="idk@something.com"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Input
                                        type="password"
                                        placeholder="don't tell"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                </FormGroup>
                            </Form>

                            <FormGroup className="">
                                <span>
                                    Go Back To {" "}
                                    <Login />
                                </span>
                            </FormGroup>

                            <Button
                                type="submit"
                                className="btn btn-outline mx-auto"
                                color="light"
                                // onClick={this.handleSubmit}
                                onClick={this.toggleNested}
                            >
                                SUBMIT
                                </Button>
                            <Modal
                                isOpen={this.state.nestedModal}
                                onClick={this.handleSubmit}
                            >
                                <ModalBody className="nested-modal">
                                    <p className="text-center">
                                        Registration completed!
                                         {this.state.signUpMssg}
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="success"
                                        onClick={this.toggleAll}
                                    // onClose={this.state.closeAll ? this.toggleAll : undefined}
                                    >
                                        Close All
                                        </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Registration