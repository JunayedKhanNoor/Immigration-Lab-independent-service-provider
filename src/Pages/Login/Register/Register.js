import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";


const Register = () => {
  const [accept, setAccept] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [ourError, setOurError] = useState('');
  const navigate = useNavigate()

  const handleRegistration=async(event)=>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmPass = event.target.confirmPassword.value;
      const passwordRegex = /.{6,}/;
      const validPassword = passwordRegex.test(password);
      if(!/^\S+@\S+\.\S+$/.test(email)){
        setOurError("Invalid Email")  
      }else if(password !== confirmPass){
        setOurError("Password and Confirm Password not same!!")
      }
      else if(!validPassword){
        setOurError("At least 6 character required in Password field")
      }else{
        setOurError('')
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName:name});
        navigate("/");
      }

  }
  if(loading || updating){
      return <Loading></Loading>
  }
 
  return (
    <div className="p-3" style={{ maxWidth: "600px", margin: "40px auto",marginBottom:'200px'  }}>
      <h1 style={{ color: "#30475E" }} className="text-center my-2 fw-bold p-2">
        Please register
      </h1>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control
           name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <div style={{height:'20px'}}>
            <p className="text-danger mb-3">{ourError}</p>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAccept(!accept)}
            type="checkbox"
            className={!accept && `text-danger`}
            label="Accept terms and conditions"
          />
        </Form.Group>
        <Button
          disabled={!accept}
          className="px-4 fw-bold"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <p className="mt-2">
        Already have an account?
        <Link className="ms-2" to="/login">
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
