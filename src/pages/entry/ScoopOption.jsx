import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function ScoopOptions({ name, image }) {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => updateItemCount(name, parseInt(e.target.value), "scoops")

  return (
    <Col xs={12} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3080/${image}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{textAlign: "right"}}>
          {name}
        </Form.Label>
        <Col xs="5" style={{textAlign: "left"}}>
          <Form.Control type="number" defaultValue={0} onChange={handleChange}/>
        </Col>
      </Form.Group>
    </Col>
  );
}
