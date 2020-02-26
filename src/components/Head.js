import React from "react";
import "./Head.css";
import { Row, Col } from "react-bootstrap";

function Head(props) {
  return (
    <Row className="head-container" style={{ height: "65px" }}>
      <Col className="head d-flex justify-content-between align-items-center mt-2">
        <p className="profil-link pl-4 text-bold">Phil</p>
        <div className="d-flex pr-4">
          <span className="dark-light" onClick={props.toggleTheme}>
            {props.themeName}
          </span>
        </div>
      </Col>
    </Row>
  );
}
export default Head;
