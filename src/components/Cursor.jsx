import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = () => {
  //MOUSE
  const cursorDot = useRef();

  //GENERAL PROPS
  let [width, setWidth] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);

  let isVisible = useState(false);
  let isEnlarge = useState(false);

  //MOUSE PROPS
  const onMouseMove = (event) => {
    dotPosition(event);
  };

  const onMouseEnter = () => {
    isVisible.current = true;
    toogleCursorVisibility();
  };

  const onMouseLeave = () => {
    isVisible.current = false;
    toogleCursorVisibility();
  };

  const onMouseDown = () => {
    isEnlarge.current = true;
    toggleCursorSize();
  };

  const onMouseUp = () => {
    isEnlarge.current = false;
    toggleCursorSize();
  };

  //WINDOWS PROPS
  const onResize = (event) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  //hooks

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);

    // Handle Link Hovers
    handleLinkHovers();

    return () => {
      //cleanup
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
    };
  });

  //SET POSITION
  function dotPosition(event) {
    let winDimensions = { width, height },
      posX = winDimensions.width / 2,
      PosY = winDimensions.height / 2;

    isVisible.current = true;
    toogleCursorVisibility();

    posX = event.pageX;
    PosY = event.pageY;

    cursorDot.current.style.left = posX + "px";
    cursorDot.current.style.top = PosY + "px";
  }

  //TOOGLE VISIBILITY
  function toogleCursorVisibility() {
    if (isVisible.current) {
      cursorDot.current.style.opacity = 0.8;
    } else {
      cursorDot.current.style.opacity = 0;
    }
  }

  //TOOGLE SIZE
  function toggleCursorSize() {
    if (isEnlarge.current) {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(1.7)";
    } else {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }

  //HANDLE LINK HOVER
  function handleLinkHovers() {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        isEnlarge.current = true;
        toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        isEnlarge.current = false;
        toggleCursorSize();
      });
    });
  }

  return (
    <>
      <Mouse ref={cursorDot} id="mouse-dot" />
    </>
  );
};

export default Cursor;

const Mouse = styled.div`
  z-index: 999;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  width: 15px;
  height: 15px;
`;
