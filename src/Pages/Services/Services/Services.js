import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <Container>
      <Row className="p-5">
        <Col xs={12} md={4} className="border border-2 rounded shadow p-5">
          <Row>
            <Col xs={4} md={4}>
              <FontAwesomeIcon
                style={{ color: "#2980B9" }}
                icon={faAmbulance}
                size="3x"
              />
            </Col>
            <Col xs={8} md={8}>
              <NavLink style={{ textDecoration: "none" }} to="/ambulance">
                <h4 style={{ color: "#1A5276" }}>Ambulance</h4>
              </NavLink>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="border border-2 rounded shadow p-5">
          <Row>
            <Col xs={4} md={4}>
              <FontAwesomeIcon
                style={{ color: "#2980B9" }}
                icon={faTint}
                size="3x"
              />
            </Col>
            <Col xs={8} md={8}>
              <NavLink style={{ textDecoration: "none" }} to="/blood-donation">
                <h4 style={{ color: "#1A5276" }}>Blood Donation</h4>
              </NavLink>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="border border-2 rounded shadow p-5">
          <Row>
            <Col xs={4} md={4}>
              <FontAwesomeIcon
                style={{ color: "#2980B9" }}
                icon={faCalendarCheck}
                size="3x"
              />
            </Col>
            <Col xs={8} md={8}>
              <NavLink style={{ textDecoration: "none" }} to="/appointment">
                <h4 style={{ color: "#1A5276" }}>Appointment</h4>
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
