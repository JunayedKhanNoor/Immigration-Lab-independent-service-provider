import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import usa from '../../../Images/countries/usa.jpg'
import australia from '../../../Images/countries/australia.jpg'
import canada from '../../../Images/countries/canada.jpg'
import chaina from '../../../Images/countries/chaina.jpg'
import germany from '../../../Images/countries/germany.jpg'
import singapore from '../../../Images/countries/singapore.jpg'
import './Country.css'

const CountryList = () => {
  return (
    <div className="mt-5">
      <h1
        style={{ color: "#30475E",fontFamily:'monospace',marginTop:'100px',marginBottom:'100px' }}
        className="text-center text-light py-3  fw-bold animate-text"
      >
        Visa Services Following Countries
      </h1>
      <Row xs={1} md={2} lg={3} className="g-4 container mx-auto mt-5">
        <Col>
          <Card className="country-card">
            <Card.Img variant="top" src={usa} />
            <Card.Body>
              <Card.Title style={{background:'#FFC947'}} className="text-center fw-bold fs-1 shadow p-1">Usa</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="country-card">
            <Card.Img variant="top" src={canada} />
            <Card.Body>
              <Card.Title className="text-center fw-bold fs-1 shadow p-1">Canada</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="country-card">
            <Card.Img variant="top" src={australia} />
            <Card.Body>
              <Card.Title style={{background:'#FFC947'}} className="text-center fw-bold fs-1 shadow p-1">Australia</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="country-card">
            <Card.Img variant="top" src={chaina} />
            <Card.Body>
              <Card.Title style={{background:'#FFC947'}} className="text-center fw-bold fs-1 shadow p-1">China</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="country-card">
            <Card.Img variant="top" src={singapore} />
            <Card.Body>
              <Card.Title  className="text-center fw-bold fs-1 shadow p-1">Singapore</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="country-card">
            <Card.Img variant="top" src={germany} />
            <Card.Body>
              <Card.Title style={{background:'#FFC947'}} className="text-center fw-bold fs-1 shadow p-1">Germany</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CountryList;
