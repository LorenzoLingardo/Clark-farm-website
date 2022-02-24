import React from "react";
import { Container } from "react-bootstrap";
import eventsData from "../data/eventsData";

const Events = () => {
  return (
    <div>
      <h1 className="fs-700" style={{ textAlign: "center" }}>
        Events
      </h1>
      {eventsData.map((content) => {
        return (
          <div className="events-grid bg-white grid">
            <img
              style={{ "border-radius": "10px" }}
              src={content.eventImg}
              alt=""
            />
            <Container>
              <h1 className="fs-500">{content.title}</h1>
              <p>{content.desc}</p>
              <p>{content.dates}</p>
              <a
                style={{ textDecoration: "none" }}
                href={`/events/${content.id}`}
              >
                {content.title}
              </a>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
