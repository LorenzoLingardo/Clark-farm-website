import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const EventDesc = ({ event }) => {
  return (
    <Container className="events-desc">
      <Row>
        <Col>
          <div style={{ margin: "10px 10px" }}>
            <h1 className="fs-700">{event.title}</h1>
            <h2 className="fs-400">{event.dates}</h2>
            <h3 className="fs-400">{event.prices}</h3>
            <div className="flex">
              <i className="fas fa-biohazard fa-2x">
                <h6>This thing 1</h6>
              </i>
              <i className="fas fa-biohazard fa-2x">
                <h6>This thing 2</h6>
              </i>
              <i className="fas fa-biohazard fa-2x">
                <h6>This thing 3</h6>
              </i>
              <i className="fas fa-biohazard fa-2x">
                <h6>This thing 4</h6>
              </i>
            </div>
            <h4 className="fs-400" style={{ maxWidth: "400px" }}>
              {event.desc}
            </h4>
            <Button>Buy stuff</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDesc;
