import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import FilmsBerlinale from './FilmsBerlinale';
import FilmsCannes from './FilmsCannes';

class FilmsParentContainer extends Component {
    render() {
        return (
            <Container className="films-page">
                <Row className="mt-3">
                    <div className="films-header text-center">
                        <h1>Winners through the Years</h1>
                        <h4>For Now the last 25 years</h4>
                        <span>ca. 1994 till date</span>
                        <div className="films-logo-wrapper">
                            <img
                                src={require( '../images/berlinale.png' )}
                                className="img-fluid-logo"
                                alt="berlinale-logo"
                            />
                            <img
                                src={require( '../images/festivalDeCannes.png' )}
                                className="img-fluid-logo"
                                alt="cannes-logo"
                            />
                        </div>
                    </div>
                </Row>
                <div className="filmslist_wrapper">
                    <FilmsCannes />
                    <FilmsBerlinale />
                </div>
            </Container>
        )
    }
}

export default FilmsParentContainer