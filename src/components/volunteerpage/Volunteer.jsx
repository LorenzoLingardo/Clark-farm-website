import React from "react"
import { Container } from "react-bootstrap";

const Volunteer = () => {
    return(
        <div>
            <h1 className="volunteer-title">
                Volunteer
            </h1>
            <Container className="volunteer-container flex">
                <p className="volunteer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="www.google.com">Volunteer - Click Here</a></p>
                <img className="volunteer-img" src="https://placeimg.com/640/480/animals" alt=""/>
            </Container>
        </div>
    )
}

export default Volunteer; 