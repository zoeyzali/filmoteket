import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const CreateFestival = () => {
    return (
        <div className="add__festivalspage">
            <h3>MVC View: Add festival form</h3>
            <div className="form__wrapper">
                <Form className="" name="addFestival">
                    <FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="exampleName"
                            placeholder="Festival name with a placeholder"
                        />
                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="Event date"
                        />
                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="text"
                            name="location"
                            id="exampleLocation"
                            placeholder="location placeholder"
                        />
                    </FormGroup>
                    <FormGroup>

                        <Input
                            type="datetime"
                            name="datetime"
                            id="exampleDatetime"
                            placeholder="date & time placeholder"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="url"
                            name="url"
                            id="exampleUrl"
                            placeholder="link to placeholder"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="textarea" name="text" id="exampleText"
                            placeholder="Festival description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />

                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />
                            Check me out
                </Label>
                    </FormGroup>
                </Form>
                <Button className="main__btn"
                    value="ADD"
                    type="submit"
                >
                    ADD A Festival
            </Button>
            </div>
        </div>
    )
}

export default CreateFestival