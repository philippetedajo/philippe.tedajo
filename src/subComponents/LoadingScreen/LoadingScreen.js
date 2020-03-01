import React from "react";
import "./LoadingScreen.css";
import { Lotties } from "../../subComponents";
import Loader from "../../assets/anim/loader.json";

const LoadingScreen = () => {
  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
      <Lotties animationData={Loader} lh="25vw" lw="25vw" mh="40vw" mw="40vw" />
    </div>
  );
};

export default LoadingScreen;
