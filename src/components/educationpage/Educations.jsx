import React from "react";
import { Container } from "react-bootstrap";
import educationData from "../data/educationData";

const Educations = () => {
    return (
        <div>
            <h1 className="fs-700" style={{"text-align": "center"}}>Educations</h1>
        {
            educationData.map(content => {
                    return (
                        <div className="events-grid bg-white grid">
                                <img  style={{"border-radius": "10px"}} src={content.educationImg} alt=""/>
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

export default Educations;