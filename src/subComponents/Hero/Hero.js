import React from "react";
import "./Hero.css";
import { Row, Col } from "react-bootstrap";

const Hero = props => {
  return (
    <Row className="heroes mt-5 mb-5">
      <Col className="hero ">
        <p className="d-inline f40 bold pl-2 pr-2">./{props.title}</p>
      </Col>
    </Row>
  );
};

export default Hero;
