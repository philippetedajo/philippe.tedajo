import React from "react"

const Container = ({ children, viewHeight }) => {
  return (
    <div className="p-4 p-lg-5" style={{ height: viewHeight }}>
      {children}
    </div>
  )
}

export default Container
