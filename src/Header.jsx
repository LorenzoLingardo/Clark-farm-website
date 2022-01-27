import React from "react"
import { Container, Navbar, NavDropdown, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import eventsData from "./components/data/eventsData";
import educationData from "./components/data/educationData";

const Header = () => {
    return (
            <div className="header ff-serif fs-400 flex">
                <Navbar expand="sm" variant="dark">
                    <Container>
                        <Nav.Link as={Link} to="/">
                            <img
                                src="https://placeimg.com/640/480/nature"
                                width="30"
                                height="30"
                                alt="Website Logo"
                                style={{"margin":"0px 10px 0px 0px"}}
                            />
                        </Nav.Link>
                        
                        <Navbar.Brand to="/">React-Bootstrap Site</Navbar.Brand>
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