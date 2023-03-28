import React from "react";
import { Col } from "react-bootstrap";

export default function ToppingOptions({ name, image }) {
  return (
    <Col xs={12} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3080/${image}`}
        alt={`${name} topping`}
      />
    </Col>
  );
}
