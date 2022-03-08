import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainOptions from "./MainOptions";
import mainOptionsData from "../data/mainOptionsData";

const MainOptionsDesc = () => {
  return (
    <Container className="ff-sans-cond my-4">
      <Row>
        {mainOptionsData.map((content) => {
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
