import React from "react"

const Container = ({ children, viewHeight, bgColor }) => {
  return (
    <div
      className="px-4 px-lg-5"
      style={{
        height: viewHeight,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  )
}

export default Container
