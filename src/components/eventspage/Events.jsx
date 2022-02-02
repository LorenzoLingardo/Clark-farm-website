import React from "react";
import { Button, Container } from "react-bootstrap";
import eventsData from "../data/eventsData";

const Events = () => {
    return (
        <div>
            <h1 className="fs-700" style={{"textAlign": "center"}}>Events</h1>
            
            {/* <Container className="events-grid grid">
                <img className="events-img" src="https://placeimg.com/640/480/nature" alt=""/>
                
                <Container className="events-desc">
                    <div className="events-tab">
                        {
                            eventsData.map(content => <Button style={{"margin": "0px 10px"}} size="sm">{content.title}</Button>)
                        }
                    </div>
                    
                    <h1>This Title</h1>
                    <p>This description</p>

                    <Container className="btm-grid grid">
                        <div>
                            <h3 className="fs-300">Ticket Price</h3>
                            <p className="fs-300">$10</p>
                        </div>
                        <div>
                            <h3 className="fs-300">Other thing</h3>
                            <p className="fs-300">Other stuff</p> 
                        </div>
                    </Container>
                </Container>
            </Container> */}
            {eventsData.map(content => {
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
            )}
        </div>
    )
}

export default Events;