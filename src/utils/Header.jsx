import React from "react";
import { Container, Navbar, NavDropdown, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import eventsData from "../components/data/eventsData";
import educationData from "../components/data/educationData";
import { useState, useEffect } from "react";
import { getAllEvents } from "../services/events";
import { useParams } from "react-router";

const Header = () => {
  const { slug } = useParams();
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((events) => {
      console.table(events);
      setAllEvents(events);
    });
  }, [slug]);
  return (
    <div className="header fs-400">
      <Col>
        <Navbar expand="sm" variant="light">
          <Container>
            <Nav.Link as={Link} to="/">
              <img
                className="header-img"
                src="https://placeimg.com/640/480/nature"
                width="30"
                height="30"
                alt="Website Logo"
              />
            </Nav.Link>

            <Navbar.Toggle
              className="header-dropdowns"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse className="header-dropdowns" id="basic-navbar-nav">
              <Nav className="header-dropdowns">
                <NavDropdown title="Events">
                  {allEvents.map((event) => {
                    return (
                      <NavDropdown.Item key={event.id}>
                        <Nav.Link
                          as={Link}
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          to={`/events/${event.slug}`}
                        >
                          {event.title}
                        </Nav.Link>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>

                <NavDropdown title="Education">
                  {educationData.map((education) => {
                    return (
                      <NavDropdown.Item key={education.id}>
                        <Nav.Link
                          as={Link}
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                          to={`/education/${education.id}`}
                        >
                          {education.title}
                        </Nav.Link>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                <Nav.Link as={Link} to="/volunteer">
                  Volunteer
                </Nav.Link>
                <Nav.Link as={Link} to="/aboutus">
                  About Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </div>
  );
};
export default Header;
