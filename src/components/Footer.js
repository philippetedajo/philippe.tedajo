import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Github } from "../assets/icons/github-brands.svg";
import { ReactComponent as Stackoverflow } from "../assets/icons/stack-overflow-brands.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin-brands.svg";
import { ReactComponent as Youtube } from "../assets/icons/youtube-brands.svg";

function Footer() {
  return (
    <Row className="footer d-flex flex-column pt-3">
      <Col className="d-flex align-items-center justify-content-center">
        <a
          href="https://github.com/philippetedajo"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-start f15"
        >
          <Github className="ics" />
        </a>
        <a
          href="https://stackoverflow.com/users/story/11538563"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-start f15"
        >
          <Stackoverflow className="ics" />
        </a>
        <a
          href="https://www.linkedin.com/in/philippe-tedajo-aa1a298b/"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-end f15"
        >
          <Linkedin className="ics" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC1cwQQQxzhauT1O79vcpfRg"
          rel="noopener noreferrer"
          target="_blank"
          className="fl d-flex justify-content-end f15"
        >
          <Youtube className="ics" />
        </a>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <p className="copyright text-center">
          © 2020 Philippe Tedajo All Rights Reserved
        </p>
      </Col>
    </Row>
  );
}

export default Footer;
