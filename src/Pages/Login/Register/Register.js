import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const [accept,setAccept] = useState(false)
  return (
    <div className="p-3" style={{maxWidth:'600px',margin:'40px auto'}}>
        <h1 style={{color:'#30475E'}} className="text-center my-2 fw-bold p-2">Please register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label  className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label  className="fw-bold">Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={()=>setAccept(!accept)} type="checkbox" className={!accept && `text-danger`}  label="Accept terms and conditions" />
        </Form.Group>
        <Button disabled={!accept} className="px-4 fw-bold" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="mt-2">Already have an account?<Link className="ms-2" to='/login'>Login</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
