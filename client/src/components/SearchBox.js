import React from 'react'
import { Input, Form, Row } from 'reactstrap'

const SearchBox = ( props ) => {
    return (
        <Row>
            <Form onSubmit={props.handleSubmit}
                className="col-7 mx-auto search_input">
                <Input
                    className="search-box"
                    type="text"
                    id="search"
                    value={props.value}
                    placeholder="Search for films"
                    onChange={props.handleChange}
                />
                <ul>{props.query}</ul>
            </Form>
        </Row>
    )
}


export default SearchBox