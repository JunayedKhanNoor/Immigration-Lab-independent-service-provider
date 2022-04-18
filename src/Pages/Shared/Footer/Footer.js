import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {GoLocation} from "react-icons/go"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer  className="mb-0 mt-5 pt-5">
      <div className="bg-dark d-md-flex justify-content-around  align-items-center">
        <div className="d-flex align-items-center py-4">
          <div>
            <FiPhoneCall
              style={{ height: "40px", width: "50px" }}
              className="text-warning me-4"
            ></FiPhoneCall>
          </div>
          <div>
            <h2 className="text-light">Call Us</h2>
            <p className="text-light">+0123456789</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-4">
          <div>
            <AiOutlineMail style={{ height: "40px", width: "50px" }}
              className="text-warning me-4"></AiOutlineMail>
          </div>
          <div>
            <h2 className="text-light">Email Us</h2>
            <p className="text-light">junayednoor@gmail.com</p>
          </div>
        </div>
        <div className="d-flex align-items-center py-4">
          <div>
           <GoLocation style={{ height: "40px", width: "50px" }}  className="text-warning me-4"></GoLocation>
          </div>
          <div>
            <h2 className="text-light">Location</h2>
            <p className="text-light">Mirpur, Dhaka</p>
          </div>
        </div>
      </div>
      <hr className="text-light m-0 p-0" />
      <div className="text-center bg-dark text-light mb-0 pb-0">
        <p className="py-3 mb-0">Copyright &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
