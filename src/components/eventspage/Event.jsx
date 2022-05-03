import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EventCarousel from "./EventCarousel";
import EventDesc from "./EventDesc";
import EventBtmContent from "./EventBtmContent";
import { useParams } from "react-router";
import { getAllEvents, getEvent } from "../../services/events";

const Event = () => {
  const { slug } = useParams();
  // const event = eventsData.find((event) => event.id === id);

  const [allEvents, setAllEvents] = useState([]);
  const [event, setEvent] = useState()

  useEffect(() => {
    getAllEvents().then((events) => {
      console.table(events);
      setAllEvents(events);
    });
  }, [slug]);

  useEffect(() => {
    setEvent(allEvents.find((event) => event.slug === slug))
  }, [allEvents])

  if(!event) return (<p>Loading...</p>)

  console.log(event)

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
