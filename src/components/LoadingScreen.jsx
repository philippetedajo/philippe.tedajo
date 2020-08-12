import React from "react";
import "./LoadingScreen.css";
import { useSpring, animated } from "react-spring"; // will replace with GASP animation!!

const LoadingScreen = () => {
  const fadeIn = useSpring({
    config: { duration: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div className="loading-container d-flex align-items-center justify-content-center">
      <animated.div style={fadeIn} className="theName">
        <div className="logo">P</div>
        <div className="logo-next">hilippe tedajo</div>
      </animated.div>
    </div>
  );
};

export default LoadingScreen;
