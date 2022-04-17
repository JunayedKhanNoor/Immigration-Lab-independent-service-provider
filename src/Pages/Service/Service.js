import React from "react";
import { Card, Col } from "react-bootstrap";
import { HiCheckCircle,HiArrowCircleRight } from "react-icons/hi";

const Service = ({ service }) => {
  const { id, name, facilities, fee, img } = service;
  return (
    <div>
      <Col>
        <Card style={{ height: "630px" }} className="text-center">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="my-3 fw-bold">{name}</Card.Title>
            <Card.Text>
              {facilities.map((facility) => (
                <p className="m-0 text-start w-75 mx-auto"><HiCheckCircle style={{width:'30px',height:'20px',color:'#22c55e'}} className="me-1"></HiCheckCircle>{facility}</p>
              ))}
              <h6 className="text-start w-75 mx-auto fw-bold fs-4 mt-2"><HiArrowCircleRight style={{width:'30px',height:'30px'}} className="mx-2 my-2"></HiArrowCircleRight>Our consultancy fee: $ {fee}</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
