import React from "react";
import { Container } from "react-bootstrap";
import eventData from "../data/eventsData";
import { Paths } from "../../utils/Paths";

const Events = () => {
    return (
        <div>
            <h1 className="fs-700" style={{"text-align": "center"}}>Events</h1>
        {
            eventData.map(content => {
                    return (
                        <div className="events-grid bg-white grid">
                                <img  style={{"border-radius": "10px"}} src={content.eventImg} alt=""/>
                            <Container>
                                <h1 className="fs-500">{content.title}</h1>
                                <p>{content.desc}</p>
                                <a style={{"text-decoration": "none"}} href={`/events/${content.id}`}>{content.title}</a>
                            </Container>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}

export default Events;