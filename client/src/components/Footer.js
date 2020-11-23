import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
    render() {
        return (
            <Container fluid className="footer text-white bg-dark">
                <Row>
                    <Col xs="12" md="4" lg="4" className="text-center">
                        <a className="text-white"
                            href="mailto:zoeecoding@gmail.com">
                            info@filmkollen.se</a>
                    </Col>
                    <Col xs="12" md="4" lg="4" className="text-center">
                        +46 10-123 45 678
                    </Col>
                    <Col xs="12" md="4" lg="4" className="text-center">
                        © 2020 zoeecoding
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer