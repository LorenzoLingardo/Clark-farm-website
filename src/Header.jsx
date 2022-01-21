import React from "react"
import { Container, Navbar, NavDropdown, Nav} from "react-bootstrap";

const Header = () => {
    return (
            <div className="header ff-serif fs-400 flex">
                <Navbar expand="lg" variant="dark">
                    <Container>
                        <img
                            src="https://placeimg.com/640/480/nature"
                            width="30"
                            height="30"
                            alt="Website Logo"
                            style={{margin:"0px 10px 0px 0px"}}
                        />
                        <Navbar.Brand href="/">React-Bootstrap Site</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <NavDropdown title="Events" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Event 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Event 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Event 3</NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Link href="/">Education</Nav.Link>
                            <Nav.Link href="/">Volunteer</Nav.Link>
                            <Nav.Link href="/">About Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            )
        }

export default Header;