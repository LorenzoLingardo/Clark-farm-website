import React from "react";
import eventsData from "../data/eventsData";

const Events = () => {
  return (
    <div>
      <h1 className="fs-700" style={{ textAlign: "center" }}>
        Events
      </h1>
      {eventsData.map((content) => {
        return (
          <div className="bg-white">
            <div className="m-3">
              <a
                style={{ textDecoration: "none" }}
                href={`/events/${content.id}`}
              >
                {
                  <img
                    style={{ borderRadius: "10px", maxWidth: "400px" }}
                    src={content.eventImg}
                    alt=""
                  />
                }
              </a>
              <div>
                <h1 className="fs-500">{content.title}</h1>
                <p className="events-desc">{content.desc}</p>
                <p className="fs-400">{content.dates}</p>
              </div>
            </div>

            <h1 className="bg-dark text-light">{content.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
