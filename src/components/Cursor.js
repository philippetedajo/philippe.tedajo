import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import useMousePosition from "../utils/useMousePositionHook"

const Cursor = () => {
  const cursor = useRef(null)
    const { x, y } = useMousePosition()


  const onMouseMove = () =>{
    gsap.to(cursor.current, {
      duration: 1,
      x: x,
      y: y,
    })
  }
  const onMouseEnter = () =>{
    gsap.to(cursor.current, {
      duration: .4,
      autoAlpha: 1
    })
  }
  const onMouseLeave = () =>{
    gsap.to(cursor.current, {
      duration: .4,
      autoAlpha: 0
    })
  }
  const onMouseDown = () =>{
    console.log("down")
  }
  const onMouseUp = () =>{
    console.log("up")
  }


  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);


    return () => {
      //cleanup
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  },[cursor, x, y]);



  return (
    <>
      <div className="cursor" ref={cursor} />
    </>
  )
}

export default Cursor
