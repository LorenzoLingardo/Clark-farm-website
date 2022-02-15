import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MainOptions from "./MainOptions"

const MainOptionsDescArray = [
    {
        id: 1,
        title: "Upcoming Events",
        img: "https://placeimg.com/640/480/nature",
        link: "events"
    },
    {
        id: 2,
        title: "Volunteer",
        img: "https://placeimg.com/640/480/animals",
        link: "volunteer"
    },
    {
        id: 3,
        title: "About Us",
        img: "https://placeimg.com/640/480/nature",
        link: "aboutus"
    }
]

const MainOptionsDesc = () => {
    return (
        <Container className="main-options ff-sans-cond">
            <Row className="my-4">
            {
                MainOptionsDescArray.map(content => {
                    return(
                        <Col className="main-options-content bg-white mx-2">
                            <MainOptions key={content.id} {...content}/>
                            <a style={{textDecoration: "none"}} href={`/${content.link}`}>{content.title}</a>
                        </Col>
                    )
                })
            }
            </Row>
        </Container>
    )
}

export default MainOptionsDesc;