import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="text-uppercase">
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ letterSpacing: "2px" }}
          className="fs-2 fw-bold"
        >
          Immigration <span style={{color:'#FFD523'}}>Lab</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold"><CustomLink to='/success-stories'>Success Stories</CustomLink></Nav.Link>
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold"><CustomLink to='/blogs'>Blogs</CustomLink></Nav.Link>
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold"><CustomLink to='/about'>About</CustomLink></Nav.Link>
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold"><CustomLink to='/login'>Login</CustomLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;