import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import Survey from "./Survey";

const AboutUs = () => {
    return(
        <Container>
            <h1 className="about-title">
                    About Us
            </h1>
            <Container className="about-container">
                <Col className="fs-400">
                    Mission Statement
                </Col>
                <Row>
                    <Col className="about-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                    <Col>
                        <img src="https://placeimg.com/640/480/animals" alt=""/>
                    </Col>
                </Row>
            </Container>
            <Survey />
        </Container>
    )
}

export default AboutUs; 