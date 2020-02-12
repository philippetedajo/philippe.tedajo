import React, { useEffect, useState } from "react";
import "./Loader.css";
import Lottie from "react-lottie";
import animationData from "../assets/anim/loader.json";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  });

  if (windowWidth > 768) {
    return (
      <div className="loader d-flex justify-content-center align-items-center">
        <Lottie options={defaultOptions} height={"25vw"} width={"25vw"} />
      </div>
    );
  } else {
    return (
      <div className="loader d-flex justify-content-center align-items-center">
        <Lottie options={defaultOptions} height={"50vw"} width={"50vw"} />
      </div>
    );
  }
}

export default Loader;
