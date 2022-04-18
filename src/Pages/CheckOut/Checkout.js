import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import background2 from "../../Images/Banner/background2.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const service = event.target.service.value;
    if (!name) {
      toast("Please give your name");
    }
    if (!service) {
      toast("Please give name which visa service you want");
    }
    toast("Thank you for the booking", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <Container style={{marginBottom:'300px'}}>
      <Row className="justify-content-md-center my-5 g-5">
        <Col sm="12" md="6">
          <img className="img-fluid" src={background2} alt="" />
        </Col>
        <Col sm="12" md="6">
           <div style={{maxWidth:'300px'}} className="mx-auto">
           <h3 className="text-primary">Our Services:</h3>
            <ul>
                <li>Student Visa Consultancy</li>
                <li>Travel Visa Consultancy</li>
                <li>Immigration Visa Consultancy</li>
                <li>Business Visa Consultancy</li>
                <li>VIP Visa Consultancy</li>
                <li>Work Visa Consultancy</li>
            </ul>
           </div>
          <h1
            style={{ color: "#30475E" }}
            className="text-center my-2 fw-bold p-2"
          >
            Please fill up the form
          </h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Your Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">
                Which Visa service you want to subscribe?
              </Form.Label>
              <Form.Control
                name="service"
                type="text"
                placeholder="Name of the service"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Your Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email (optional)" />
            </Form.Group>
            <Button className="px-4 fw-bold" variant="primary" type="submit">
              Book the service
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Checkout;
