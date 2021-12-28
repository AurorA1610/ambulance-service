import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";

const AmbulanceBooking = () => {
  return (
    <div>
      <h1 style={{ color: "#1E8449", padding: 20 }}>
        Choose Ambulance Category
      </h1>
      <Container>
        <Row className="p-5">
          <Col sm={12} md={6}>
            <input
              type="radio"
              name="ambulance-category"
              value="Basic"
              style={{ width: 20, height: 20 }}
            />
             {" "}
            <label for="basic" className="fs-3">
              Basic
            </label>
            <br />
          </Col>
          <Col sm={12} md={6}>
             {" "}
            <input
              type="radio"
              name="ambulance-category"
              value="Advanced"
              style={{ width: 20, height: 20 }}
            />
             {" "}
            <label for="advanced" className="fs-3">
              Advanced
            </label>
            <br />
          </Col>
        </Row>
        <Button variant="success">Book Now</Button>
      </Container>
    </div>
  );
};

export default AmbulanceBooking;
