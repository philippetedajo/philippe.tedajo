import React from "react";
import "./About.css";
import { Hero } from "../../subComponents";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "HTML",
    "(S)CSS",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "Mongodb",
    "redux",
    "Bootstrap",
    "Styled component"
  ];

  const listSkills = skills.map(element => <li> {element} </li>);

  return (
    <Container id="about" className="about pt-2" style={{ minHeight: "600px" }}>
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
          <ul className="skills mt-3">{listSkills}</ul>
        </Col>
        <div className="profil mb-5 mt-4 ml-md-5 shadow"></div>
      </Row>
    </Container>
  );
};

export default About;
