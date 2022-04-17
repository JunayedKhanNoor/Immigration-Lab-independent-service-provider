import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1
        style={{ backgroundColor: "#F05454", fontFamily: "monospace" }}
        className="text-center text-light   my-5 py-3 service-title"
      >
        Our services
      </h1>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4 my-5 mx-auto">
          {
              services.map(service=><Service key={service.id} service={service}></Service>)
          }
        </Row>
      </div>
    </div>
  );
};

export default Services;
