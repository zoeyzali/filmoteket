import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import FilmsBerlinale from './FilmsBerlinale';
import FilmsCannes from './FilmsCannes';
// import FilmDetails from './FilmDetails';

class FilmsParentContainer extends Component {
    constructor( props ) {
        super( props )
        this.state = {
        }
    }


    render() {
        return (
            <Container className="films-page bg-light">
                <Row className="mt-3">
                    <div className="films-header">
                        <h1>Winners through the Years</h1>
                        <div className="films-logo-wrapper">
                            <img src={require( '../images/berlinale.png' )} className="img-fluid-logo" alt="berlinale-logo"
                            />
                            <img src={require( '../images/festivalDeCannes.png' )} className="img-fluid-logo" alt="cannes-logo"
                            />
                        </div>
                    </div>
                </Row>
                <div className="filmslist-wrapper">
                    <FilmsCannes />
                    <FilmsBerlinale />
                </div>
            </Container>
        )
    }
}

export default FilmsParentContainer