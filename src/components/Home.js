import React from "react";
import "./styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Lotties from "../toolsComponents/Lotties";
import Splash from "../assets/anim/splash.json";

function Home() {
  return (
    <Container
      fluid={true}
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <Row className="home-container d-flex flex-column flex-lg-row w-100">
        <Col className="home-animation col-4 d-flex justify-content-center align-items-center splash-container">
          <Lotties
            animationData={Splash}
            lh="20rem"
            lw="50rem"
            mh="18rem"
            mw="50rem"
          />
        </Col>
        <Col className="col-12 w-100 col-lg-8">
          <p className="hi text-bold">Hi, my name is</p>
          <h1 className="name">Philippe Tedajo.</h1>
          <p className="subtitle">I give life to Web projects.</p>
          <p className=" pl-0 title-description mt-md-4">
            I build desktop and mobile web apps that provide intuitive and
            pixel-perfect user interfaces.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
