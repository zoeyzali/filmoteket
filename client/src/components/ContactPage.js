import React, { Component } from 'react'
import {
    Container, Row, Col, Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import axios from 'axios'


class ContactPage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }
    handleChange = ( e ) => {
        this.setState( { [e.target.name]: e.target.value } )
        // console.log(e.target.value)
    }

    handleSubmit = async ( e ) => {
        e.preventDefault()

        const { name, email, message } = this.state
        const form = await axios.post( 'contact/form', {
            name,
            email,
            message
        } )
        console.log( form, 'hello form' )
    }
    render() {
        return <Container className="contact-page mt-2">
            <Row className="contact-wrapper">
                <Col className="justify-content-center m-auto" xs="12" md="12" lg="12">
                    <Form onSubmit={this.handleSubmit} className="contact-form m-auto" style={{ maxWidth: '600px' }}>
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input type="text" name="name" id="examplePassword" placeholder="Your fullname" value={this.state.name} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="idk@myemail.com" value={this.state.email} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" name="message" id="exampleText" placeholder="Write a line or two" value={this.state.message} onChange={this.handleChange} />
                        </FormGroup>
                        <Button color="secondary" type="submit">SEND MESSAGE</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}

export default ContactPage;