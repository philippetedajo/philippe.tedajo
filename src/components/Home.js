import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Lotties from "../toolsComponents/Lotties"
import Splash from "../assets/anim/loader.json"

function Home() {
  return (
    <Container fluid = {true}
      className="home d-flex align-items-center justify-content-center"
      style={{ minHeight: "470px" }}
    >
      <Row className="d-flex flex-column flex-lg-row w-100">
      <Col className = "col-4 brd d-flex justify-content-center align-items-center splash-container">
        <Lotties animationData = {Splash} lh ="14rem" lw = "14rem" mh= "7rem" mw="7rem"/>
        </Col>
        <Col className = "col-12 brd w-100 col-lg-8">
        <p className="hi text-bold">Hi, my name is</p>
      <h1 className="name">Philippe Tedajo.</h1>
      <p className="subtitle">I give life to Web projects.</p>
      <p className=" pl-0 title-description mt-md-4">
        I build desktop and mobile web apps that provide intuitive and pixel-perfect user
        interfaces.
      </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
