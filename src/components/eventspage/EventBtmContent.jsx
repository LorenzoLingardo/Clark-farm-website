import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventBtm from "./EventBtm";
import eventBtmData from "../data/eventBtmData";

const EventBtmContent = () => {
  return (
    <Container className="events-bottom-grid flex">
      <Row>
        {eventBtmData.map((content) => {
          return (
            <Col sm key={content.id}>
              <div className="bg-white mx-2" style={{ textAlign: "center" }}>
                <EventBtm key={content.id} {...content} />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default EventBtmContent;
