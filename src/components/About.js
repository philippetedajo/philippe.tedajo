import React from "react";
import "./styles/About.css";
import Hero from "../toolsComponents/Hero";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="about " style={{ minHeight: "600px" }}>
      <Hero title="About me" />
      <Row className="d-flex align-items-center flex-column-reverse flex-md-row">
        <Col className=" col-lg-8 col-md-7 text-justify text-bold ">
          I am a self-taught Full Stack JavaScript Developer, specialised in
          React framework. My learning path is quite unconventional, after a
          financial engineering Master degree, I found a passion in web
          application development and I started to learn programming from
          scratch, from FreeCodeCamp to Pluralsight with a lot of sleepless
          nights. I built a solid foundation in Javascript. Here are few
          technologies I've been working with recently:
          <ul className="skills mt-3">
            <li>JavaScript (ES6+)</li>
            <li>HTML</li>
            <li>(S)CSS</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Styled component</li>
          </ul>
        </Col>
        <div className="profil mb-5 mt-4 ml-md-5 shadow"></div>
      </Row>
    </Container>
  );
}

export default About;
