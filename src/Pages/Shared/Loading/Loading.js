import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "400px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" size="sm" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loading;