import React, { useEffect, useState } from "react";
import "./styles/Lotties.css";
import Lottie from "react-lottie";

function Lotties(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
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
      <div className="d-flex justify-content-center align-items-center">
        <Lottie options={defaultOptions} height={props.lh} width={props.lw} />
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Lottie options={defaultOptions} height={props.mh} width={props.mw} />
      </div>
    );
  }
}

export default Lotties;
