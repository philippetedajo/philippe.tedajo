import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

function Home() {
  return (
    <Container
      className="home d-flex flex-column justify-content-center"
      style={{ minHeight: "470px" }}
    >
      <p>Hi, my name is</p>
      <h1 className="name">Philippe Tedajo.</h1>
      <p className="subtitle">I give lives to Web projects.</p>
      <p className=" col-md-6 pl-0 title-description mt-md-4">
        I build web apps that provide intuitive and pixel-perfect user
        interfaces.
      </p>
    </Container>
  );
}
export default Home;
