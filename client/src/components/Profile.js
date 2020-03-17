import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './LoginPage'
import profileImg from '../images/mr-robot.png'
import { UserContext } from '../context/UserContext'

class Profile extends Component {
    static contextType = UserContext

    render() {
        const { user } = this.context
        return (
            <Container className="profiles-page bg-light">
                <Row>
                    <Col xs="12" sm="5" md="4" lg="4" className="col-1">
                        <img
                            src={profileImg}
                            className="img-fluid" alt={profileImg}
                            style={{ maxWidth: "100%" }}
                        />
                        <h3>{user.firstName}{" "}{user.lastName}</h3>
                        <p>{user.email}</p>
                    </Col>

                    <Col xs="12" sm="7" md="8" lg="8" className="col-2">
                        {//to be update 
                        }
                        <h2>WatchList</h2>
                        <ul>
                            <li>Oslo August 31</li>
                            <li>Mommy</li>
                            <li>Melancholia</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Profile