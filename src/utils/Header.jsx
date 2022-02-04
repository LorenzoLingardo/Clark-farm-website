import React from "react"
import { Container, Navbar, NavDropdown, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import eventsData from "../components/data/eventsData";
import educationData from "../components/data/educationData";

const Header = () => {
    return (
            <div className="header ff-sans-cond fs-500 flex">
                <Navbar expand="sm" variant="light">
                    <Container>
                        <Nav.Link as={Link} to="/">
                            <img
                                className="header-logo"
                                src="https://placeimg.com/640/480/nature"
                                width="30"
                                height="30"
                                alt="Website Logo"
                            />
                        </Nav.Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <NavDropdown title="Events">
                            {eventsData.map (event => {
                                return (
                                <NavDropdown.Item>
                                    <Nav.Link as={Link} className="text-dark" style={{"text-decoration": "none"}} to={`/events/${event.id}`}>{event.title}</Nav.Link>
                                </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                        
                        <NavDropdown title="Education">
                            {educationData.map (education => {
                                return (
                                <NavDropdown.Item>
                                    <Nav.Link as={Link} className="text-dark" style={{"text-decoration": "none"}} to={`/education/${education.id}`}>{education.title}</Nav.Link>
                                </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                            <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            )
        }
export default Header;