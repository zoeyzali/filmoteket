import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
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
        console.log( form, "contacts form" )
    }

    render() {
        return <Container className="contact-page bg-light py-4 mt-4">
            <Row className="contact-wrapper">
                <Col className="mx-auto" xs="12" md="12" lg="12">
                    <Form onSubmit={this.handleSubmit} className="contact-form mx-auto text-center">
                        <FormGroup>
                            <Label htmlFor="exampleName"
                                className="bg-warning">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="examplePassword"
                                placeholder="Bowie"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="exampleEmail" className="bg-warning">
                                Email
                                </Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="idk@email.com"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="exampleText" className="bg-warning">
                                Message
                                </Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="exampleText"
                                placeholder="Your message here..."
                                value={this.state.message}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button
                            color="warning"
                            size="md"
                            type="submit">
                            SEND MESSAGE
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    }
}

export default ContactPage