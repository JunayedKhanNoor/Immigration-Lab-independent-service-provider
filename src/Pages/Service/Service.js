import React from "react";
import { Card, Col } from "react-bootstrap";
import { HiCheckCircle,HiArrowCircleRight } from "react-icons/hi";
import {BsCartCheckFill} from "react-icons/bs"
import './Service.css'
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, facilities, fee, img } = service;
  const navigate = useNavigate();
  const navigateToCheckOut =(id)=>{
    navigate(`/checkout/${id}`);
  }
  return (
      <Col>
        <Card style={{ height: "630px" }} className="text-center service-cart">
          <Card.Img className="service-image" style={{ height: "334px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title className="my-3 fw-bold">{name}</Card.Title>
            <Card.Text>
              {facilities.map((facility) => (
                <span key={facility} className="d-block  m-0 text-start w-75 mx-auto"><HiCheckCircle style={{width:'30px',height:'20px',color:'#22c55e'}} className="me-1"></HiCheckCircle>{facility}</span>
              ))}
            </Card.Text>
            <h6 className="text-start w-75 mx-auto fw-bold fs-4 mt-2"><HiArrowCircleRight style={{width:'30px',height:'30px',paddingBottom:'4px'}} ></HiArrowCircleRight>Our consultancy fee: $ {fee}</h6>
          </Card.Body>
          <button onClick={()=>{navigateToCheckOut(id)}} style={{backgroundColor:'#22c55e'}} className="btn w-100 p-2 fs-4-5 fw-bold cart-button"><BsCartCheckFill style={{width:'30px',height:'25px',paddingBottom:'4px'}}></BsCartCheckFill> Buy Service</button>
        </Card>
      </Col>
  );
};

export default Service;
