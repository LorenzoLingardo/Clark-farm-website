import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Volunteer = () => {
  return (
    <Container>
      <h1 className="volunteer-title">Volunteer</h1>
      <Container className="volunteer-container">
        <Row>
          <Col>
            <p className="volunteer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <a href="www.google.com">Volunteer - Click Here</a>
            </p>
          </Col>
          <Col>
            <img
              className="volunteer-img"
              src="https://placeimg.com/640/480/animals"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Volunteer;
