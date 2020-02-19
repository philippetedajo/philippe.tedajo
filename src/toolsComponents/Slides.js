import React from "react";
import "./Slides.css";
import { Carousel } from "react-bootstrap";

function Slides() {
  return (
    <Carousel className="mt-5 mb-5 shadow slides">
      <Carousel.Item className="sl sl1 brd">
        <Carousel.Caption className="caption">
          <p className="m-lg-0 git1">React Quote Player</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="sl sl2">
        <Carousel.Caption className="caption">
          <p className="m-lg-0">phare</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="sl sl3">
        <Carousel.Caption className="caption">
          <p className="m-lg-0">herdo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
