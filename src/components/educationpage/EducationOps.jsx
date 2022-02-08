import React from "react";
import { Container } from "react-bootstrap";
import educationData from "../data/educationData";

const EducationOps = () => {
    return (
        <div>
            <h1 className="fs-700" style={{"textAlign": "center"}}>Education Opportunities</h1>
        {
            educationData.map(content => {
                    return (
                        <div className="events-grid bg-white grid">
                                <img  style={{"border-radius": "10px"}} src={content.educationImg} alt=""/>
                            <Container>
                                <h1 className="fs-500">{content.title}</h1>
                                <p>{content.desc}</p>
                                <a style={{textDecoration: "none"}} href={`/education/${content.id}`}>{content.title}</a>
                            </Container>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}

export default EducationOps;