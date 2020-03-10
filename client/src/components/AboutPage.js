import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const AboutUs = () => {
    return (
        <div className="mt-4 about-wrapper">
            <Jumbotron>
                <h1 className="text-center">
                    Le cinéma</h1>
                <h2 className="lead text-center">
                    A small app for film enthusiasts
                    </h2>
                <hr className="my-2" />
                <p className="lead">
                    <Button href="/films/" className="btn btn-outline d-block" color="light">
                        FILMS
                        </Button>
                </p>
            </Jumbotron>
        </div>
    )
};

export default AboutUs