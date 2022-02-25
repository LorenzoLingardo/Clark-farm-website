import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Volunteer = () => {
  return (
    <Container>
      <h1 className="volunteer-title">Volunteer</h1>
      <Row>
        <Col sm>
          <div className="volunteer-container m-3">
            <h2>Read here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <a href="www.google.com">Volunteer - Click Here</a>
            </p>
          </div>
        </Col>
        <Col>
          <img
            className="volunteer-img m-3"
            src="https://placeimg.com/640/480/animals"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Volunteer;
