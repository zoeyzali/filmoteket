import React from 'react'
import { Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="about-wrapper">
            <Jumbotron>
                <h1 className="text-center">
                    Le cinéma</h1>
                <h2 className="lead text-center">
                    A small app for film enthusiasts
                    </h2>
                <hr className="my-2" />
                <p className="lead">
                    <Link to={`/films`} className="btn btn-outline d-block jumboBtn"
                        color="light">
                        FILMS
                        </Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default AboutUs