import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventBtm from "./EventBtm";

const EventsBottomArray = [
  {
    id: 1,
    desc: "Option 1",
    img: "https://placeimg.com/640/480/nature",
  },
  {
    id: 2,
    desc: "Option 2",
    img: "https://placeimg.com/640/480/nature",
  },
  {
    id: 3,
    desc: "Option 3",
    img: "https://placeimg.com/640/480/nature",
  },
];

const EventBtmContent = () => {
  return (
    <Container className="events-bottom-grid flex">
      <Row>
        {EventsBottomArray.map((content) => {
          return (
            <Col sm>
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
