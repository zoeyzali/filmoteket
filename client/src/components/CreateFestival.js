import React from 'react'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'

const CreateFestival = () => {
    return (
        <div className="container mx-auto add-festivalspage">
            <h1>MVC View Adding festivals data</h1>
            <Form className="bg-light p-2" name="addFestival">
                <FormGroup>
                    <Input plaintext value="Some plain text/ static value" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleName">Festival Name or Host</Label>
                    <Input
                        type="text"
                        name="name"
                        id="exampleName"
                        placeholder="with a placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Event Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleLocation">Location</Label>
                    <Input
                        type="text"
                        name="location"
                        id="exampleLocation"
                        placeholder="location placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDatetime">Datetime</Label>
                    <Input
                        type="datetime"
                        name="datetime"
                        id="exampleDatetime"
                        placeholder="datetime placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">Url</Label>
                    <Input
                        type="url"
                        name="url"
                        id="exampleUrl"
                        placeholder="url placeholder"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSearch">Search</Label>
                    <Input
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="search for films in the running"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        multiple
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
        </FormText>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Check me out
        </Label>
                </FormGroup>
            </Form>
            <Button className="btn btn-outline-warning"
                value="ADD"
                type="submit"
                color="light"
                size="lg"
            >
                ADD
            </Button>
        </div>
    )
}

export default CreateFestival