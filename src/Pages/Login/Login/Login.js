import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let ErrorMessage ;
  if (error) {
    ErrorMessage=<p className="text-danger">{error?.message}</p>
  }
  const handleLogin = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-3" style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1 style={{ color: "#30475E" }} className="text-center my-2 fw-bold p-2">
        Please Login
      </h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button className="px-4 fw-bold" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div style={{height:'20px'}}>
        {ErrorMessage}
      </div>
      <div className="d-flex justify-content-between justify-content-end">
        <p className="mt-2">
          New to Immigration Lab?
          <Link className="ms-2" to="/register">
            Sign Up
          </Link>
        </p>
        <span
          role="button"
          className="text-warning text-decoration-underline fw-bold"
        >
          Forgot password?
        </span>
      </div>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
