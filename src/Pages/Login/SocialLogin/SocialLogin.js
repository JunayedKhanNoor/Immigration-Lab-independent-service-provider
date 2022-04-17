import React, { useEffect } from "react";
import './SocialLogin.css'
import {FcGoogle} from "react-icons/fc"
import {BsGithub} from "react-icons/bs"
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let ErrorMessage;
  if (error || errorGit) {
    ErrorMessage = <p className="text-danger">{error?.message} {errorGit?.message}</p>;
  }
  useEffect(() => {
    if (user || userGit) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from,userGit]);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center text-muted">
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
        <p className="mt-2 pt-1 px-2 fw-bold">Or</p>
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
      </div>
      <div>
          <button onClick={()=>signInWithGoogle()}  style={{backgroundColor:'#22c55e'}} className="btn s-btn w-50 d-block mx-auto my-3 fw-bold"><FcGoogle style={{width:'30px',height:'30px'}} className="me-2"></FcGoogle> Google Sign In</button>
      </div>
      <div>
          <button onClick={()=>signInWithGithub()}  style={{backgroundColor:'#22c55e'}} className="btn s-btn w-50 d-block mx-auto my-3 fw-bold"><BsGithub style={{width:'30px',height:'30px'}} className="me-2"></BsGithub> Github Sign In</button>
      </div>
      {ErrorMessage}
    </div>
  );
};

export default SocialLogin;
