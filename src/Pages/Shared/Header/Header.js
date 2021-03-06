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
            <CustomLink className="text-light fs-6 fw-bold mx-2 "  to='/home'>Services</CustomLink>
            <CustomLink className="text-light fs-6 fw-bold mx-2 " to='/success-stories'>Success Stories</CustomLink>
            <CustomLink className="text-light fs-6 fw-bold mx-2 " to='/blogs'>Blogs</CustomLink>
            <CustomLink className="text-light fs-6 fw-bold mx-2 " to='/about'>About</CustomLink>
            {
              user?
              <span role="button" onClick={logOut}  className="text-light fs-6 fw-bold mx-2 ">Sign Out</span>
              :
              <CustomLink className="fs-6 fw-bold mx-2" to='/login'>Login</CustomLink>
            } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
