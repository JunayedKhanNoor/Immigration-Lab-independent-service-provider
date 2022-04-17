import React from "react";
import './SocialLogin.css'
import {FcGoogle} from "react-icons/fc"
import {BsGithub} from "react-icons/bs"
const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center text-muted">
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
        <p className="mt-2 pt-1 px-2 fw-bold">Or</p>
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
      </div>
      <div>
          <button  style={{backgroundColor:'#22c55e'}} className="btn s-btn w-50 d-block mx-auto my-3 fw-bold"><FcGoogle style={{width:'30px',height:'30px'}} className="me-2"></FcGoogle> Google Sign In</button>
      </div>
      <div>
          <button  style={{backgroundColor:'#22c55e'}} className="btn s-btn w-50 d-block mx-auto my-3 fw-bold"><BsGithub style={{width:'30px',height:'30px'}} className="me-2"></BsGithub> Github Sign In</button>
      </div>
    </div>
  );
};

export default SocialLogin;
