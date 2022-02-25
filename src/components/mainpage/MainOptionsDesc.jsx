import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainOptions from "./MainOptions";

const MainOptionsDescArray = [
  {
    id: 1,
    title: "Upcoming Events",
    img: "https://placeimg.com/640/480/nature",
    link: "events",
  },
  {
    id: 2,
    title: "Volunteer",
    img: "https://placeimg.com/640/480/animals",
    link: "volunteer",
  },
  {
    id: 3,
    title: "About Us",
    img: "https://placeimg.com/640/480/nature",
    link: "aboutus",
  },
];

const MainOptionsDesc = () => {
  return (
    <Container className="ff-sans-cond my-4">
      <Row>
        {MainOptionsDescArray.map((content) => {
          return (
            <Col sm>
              <div className="main-options-content bg-white mb-3 mx-3">
                <a style={{ textDecoration: "none" }} href={`/${content.link}`}>
                  {<MainOptions key={content.id} {...content} />}
                  {content.title}
                </a>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MainOptionsDesc;
