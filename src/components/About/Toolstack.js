import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVisualstudiocode,
  SiLinux,
} from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa"; // Used for Dev C++ (no exact icon)
import { TbApi } from "react-icons/tb"; // Used for Thunder Client (API tool)

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCuttlefish title="Dev C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi title="Thunder Client" />
      </Col>
    </Row>
  );
}

export default Toolstack;
