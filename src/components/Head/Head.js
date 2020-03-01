import React from "react";
import "./Head.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const Head = props => {
  return (
    <Row className="head-container" style={{ height: "65px" }}>
      <Col className="head d-flex justify-content-between align-items-center">
        <p className="profil-link col-6  text-bold">Phil</p>
        <div className="nav-link d-flex col-6 ">
          <Link to="projects" className="head-link">
            Projects
          </Link>
          <Link to="about" className="head-link">
            About me
          </Link>
          <Link to="contact" className="head-link">
            Contact
          </Link>
          <span className="dark-light" onClick={props.toggleTheme}>
            {props.themeName}
          </span>
        </div>
      </Col>
    </Row>
  );
};
export default Head;
