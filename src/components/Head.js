import React from "react";
import "./Head.css";
import { Row, Col } from "react-bootstrap";

function Head(props) {
  return (
    <Row>
      <Col className="head d-flex justify-content-between align-items-center mt-2">
        <p className="profil-link pl-4">Phil</p>
        <div className="d-flex pr-4">
          <span className="dark-light mt-2" onClick={props.toggleTheme}>
            {props.themeName}
          </span>
          <p className="blog-link ml-3">Blog</p>
        </div>
      </Col>
    </Row>
  );
}
export default Head;
