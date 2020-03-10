import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class FestivalsPage extends Component {
    render() {
        return <Container className="festivals-page">
            <Row>
                <Col xs="6" md="6">
                    <div className="Cannes-container">
                        <h1>Festival De Cannes</h1>
                        <img src={require( "../images/cannes.png" )} alt="Cannes-Logo" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="6" md="6">
                    <div className="Berlinale">
                        <h1>Berlinale International</h1>
                        <img src={require( "../images/berlinale.png" )} alt="Berlinale" className="img-fluid" />
                    </div>
                </Col>
                <Col xs="12" md="12" lg="12">
                    <div className="content-wrapper mt-4">
                        <h1 className="content-header">More content here</h1>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Mattis rhoncus urna neque viverra justo nec.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="12" lg="12">
                    <div>
                    </div>
                </Col>
            </Row>
        </Container>
    }
}

export default FestivalsPage;