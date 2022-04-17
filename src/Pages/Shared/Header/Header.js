import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user, loading,error] = useAuthState(auth);
  const logOut=()=>{
    signOut(auth);
  }
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold mx-1"><CustomLink to='/home'>Services</CustomLink></Nav.Link>
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold mx-1"><CustomLink to='/success-stories'>Success Stories</CustomLink></Nav.Link>
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold mx-1"><CustomLink to='/blogs'>Blogs</CustomLink></Nav.Link>
            <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold mx-1"><CustomLink to='/about'>About</CustomLink></Nav.Link>
            {
              user?
              <Nav.Link onClick={logOut} as={Link} to='/' className="text-light fs-6 fw-bold mx-1 ">Sign Out</Nav.Link>
              :
              <Nav.Link  style={{ letterSpacing: "1px" }} className="fs-6 fw-bold mx-1"><CustomLink to='/login'>Login</CustomLink></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
