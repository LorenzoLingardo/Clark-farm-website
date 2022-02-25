import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventCarousel from "./EventCarousel";
import EventDesc from "./EventDesc";
import EventBtmContent from "./EventBtmContent";
import eventsData from "../data/eventsData";
import { useParams } from "react-router";

const Event = () => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === id);
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <div>
              <EventCarousel event={event} />
            </div>
          </Col>
          <Col sm>
            <div>
              <EventDesc event={event} />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="add-info bg-accent flex">
        <h4>Additional Information</h4>
      </div>
      <EventBtmContent />
    </div>
  );
};

export default Event;
