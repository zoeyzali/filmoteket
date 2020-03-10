import React, { Component } from 'react'
import { Container, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Login from './LoginPage'
// import { register } from './UserFunctions'

class Registration extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            token: '',
            signUpError: 'ERROR TEXT',
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
        // console.log(`checking out event-- 
        // ${event.target.name}`)
    }

    // handleSubmit = (event) => {
    //   event.preventDefault()
    //   const newUser = {
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     email: this.state.email,
    //     password: this.state.password
    //   }
    //   register(newUser)
    //     .then(response => {
    //       if (response) {
    //         this.setState({ newUser: response.newUser })
    //         console.log(response, 'the new user')
    //         this.props.history.push('users/login')
    //       }
    //     })
    //   console.log(newUser, 'hello')
    // }

    handleSubmit = ( event ) => {
        event.preventDefault()
        const {
            firstName,
            lastName,
            email,
            password,
            signUpError,
        } = this.state;

        this.setState( {
            isLoading: true,
        } );

        // Post request to backend
        fetch( '/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                signUpError: signUpError,
            } ),
        } ).then( res => res.json() )
            .then( json => {
                console.log( 'json', json );
                if ( json.success ) {
                    this.setState( {
                        signUpError: json.message,
                        isLoading: false,
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        closeAll: true,
                    } );
                } else {
                    this.setState( {
                        signUpError: json.message,
                        isLoading: false,
                    } );
                }
            } );
    }
    componentDidMount() {
        this.setState( {
            isLoading: false
        } );
    }

    render() {
        // const {
        //   // firstName,
        //   // lastName,
        //   // email,
        //   // password,
        //   token,
        //   signUpError,
        //   isLoading
        // } = this.state

        // if (isLoading) {
        //   return (
        //     <div>
        //       {isLoading ? <p>Loading...</p> : "REG-MODAL"
        //       }</div>
        //   )
        // }

        // if (!token) {
        //   return (
        //     <div>
        //       {(signUpError) ? (
        //         <p>{signUpError}</p>
        //       ) :
        return (
            <>
                <button className="nav-link reg-btn"
                    onClick={this.toggle}>Sign Up</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="reg-modal">
                    <ModalHeader className="reg-header" toggle={this.toggle}>
                        <div className="text-center font-weight-light text-light">CREATE ACCOUNT</div>
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Form>
                                <FormGroup>
                                    <Label for="name">FirstName</Label>
                                    <Input valid type="text" placeholder="Enter your firstname" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                    {/*} <FormFeedback valid>Sweet! that is one cool name!</FormFeedback> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label
                                        htmlFor="name">LastName</Label>
                                    <Input
                                        type="name" placeholder="Enter your lastname" name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange} />
                                    {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" placeholder="idk@something.se" name="email"
                                        value={this.state.email} onChange={this.handleChange} />
                                    { /* <FormFeedback>Type in a valid email</FormFeedback> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" placeholder="password at least 5 characters" name="password" value={this.state.password} onChange={this.handleChange} />
                                    { /*   <FormFeedback valid>Sweet! that should do it!</FormFeedback> */}
                                </FormGroup>
                            </Form>
                            <div className="btn-row">
                                <span>
                                    Already a member?
                    <Link to="/login" className="login-btn">
                                        <Login text={this.props.text}
                                        />
                                    </Link>
                                </span>
                            </div>
                            <Button type="submit" className="btn btn-info mx-auto submit-btn" onClick={this.toggleNested}>Submit</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalBody className="nested-modal">
                                    <p className="text-center">Registration completed!</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="success" onClick={this.handleSubmit} onClosed={this.state.closeAll ? this.toggleAll : undefined}>Close All</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>
                    </ModalBody>
                </Modal>
            </>

        )
    }
}

export default Registration