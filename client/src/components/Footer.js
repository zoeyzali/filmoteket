import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
    render() {
        return <Container fluid={true} className="footer bg-light">
            <Row>
                <Col xs="12" md="4" className="text-center">
                    <a className="text-dark font-weight-light" href="mailto:filmkollen@films.se">filmkollen@film.se</a>
                </Col>
                <Col xs="12" md="4" className="text-center font-weight-light">
                    +46 10-123 45 678
        </Col>
                <Col xs="12" md="4" className="text-center font-weight-light">
                    © 2019 Zoe Ltd.
        </Col>
            </Row>
        </Container>
    }
}

export default Footer