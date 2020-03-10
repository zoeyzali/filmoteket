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
            <Container className="films-page">
                <Row className="header mt-2">
                    <div>
                        <h1>Winners through the Years</h1>
                        <img src={require( '../images/berlinale.png' )} className="img-fluid-logo" alt="berlinale-logo" />
                        <img src={require( '../images/festivalDeCannes.png' )} className="img-fluid-logo" alt="cannes-logo" />
                    </div>
                </Row>
                <div className="films-page header">
                    <FilmsCannes />
                    <FilmsBerlinale />
                </div>
            </Container>
        )
    }
}

export default FilmsParentContainer