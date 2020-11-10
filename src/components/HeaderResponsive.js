import React, { useRef, useState } from "react"
import { Link } from "gatsby"

const HeaderResponsive = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const toogleNav = () => {
    setIsOpen(!isOpen)
  }
  const openClass = isOpen ? "openResNav" : ""
  const handleClick = () => {
    console.log("hello")
  }

  return (
    <div
      className={`header_responsive_container col-md-2 m-0 p-0 ${openClass}`}
      ref={navRef}
    >
      <div className="wrapper">
        <div className="logo">
          <Link to="/">P.</Link>
        </div>
        <div className="navigation">
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderResponsive
