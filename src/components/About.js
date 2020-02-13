import React from "react";
import "./About.css";
import Hero from "../toolsComponents/Hero";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="about " style={{ minHeight: "600px" }}>
      <Hero title="About me" />
      <Row className="d-flex align-items-center flex-column-reverse flex-md-row">
        <Col className=" col-lg-8 col-md-7 text-justify ">
          Also known as Phil, I am a self-taught Full Stack JavaScript
          Developer, specialize in React framework. My learning path is quite
          non-collegial, after a financial engineering Master degree, I find a
          passion in web application development and I started to learn
          programming from scratch, from FreeCodeCamp to Pluralsight with a lot
          of sleepless nights i build a solid foundation in Javascript. Here are
          a few technologies I've been working with recently:
          <ul className="skills mt-3">
            <li>JavaScript (ES6+)</li>
            <li>HTML & (S)CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Styled component</li>
          </ul>
        </Col>
        <div className="profil mb-5 mt-4 ml-md-5"></div>
      </Row>
    </Container>
  );
}

export default About;
