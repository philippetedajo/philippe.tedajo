import React from "react"

const Container = ({ children, viewHeight, bgColor }) => {
  return (
    <div
      className="p-4 p-lg-5"
      style={{ height: viewHeight, backgroundColor: bgColor }}
    >
      {children}
    </div>
  )
}

export default Container
