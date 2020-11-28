import React from "react"

const Container = ({ children, viewHeight, bgColor }) => {
  return (
    <div
      className="p-4 p-lg-5"
      style={{
        height: viewHeight,
        backgroundColor: bgColor,
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  )
}

export default Container
