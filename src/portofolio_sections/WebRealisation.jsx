import React from "react";
import { Title, Carousel } from "../components";
import Rest from "../assets/others/food-and-restaurant.svg";

const WebRealisation = () => {
  return (
    <div className="mt-2 pt-2">
      <Title title="Artwork" icon={Rest} />
      <Carousel />
    </div>
  );
};

export default WebRealisation;
