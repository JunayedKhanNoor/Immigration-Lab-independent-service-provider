import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/Banner/banner1.jpg";
import banner2 from "../../../Images/Banner/banner2.jpg";
import banner3 from "../../../Images/Banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="shadow fw-bold">Citizenship by Investment</h3>
          <p>
            Invest in the Second Passport, Fast Citizenship in a few months
            Caribbean Passport and more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="shadow fw-bold">Immigration Consultants</h3>
          <p>Providing Immigration Services In Canada.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="shadow fw-bold">International Experience</h3>
          <p>
          We love what we do, and we are looking forward to serving you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
