import React from "react"
import { Header, HeaderResponsive, Cursor } from "../components"
import { CSSTransition } from "react-transition-group"

const Layout = ({ children, location }) => {
  return (
    <div className="full-layout">
      <Header />
      <HeaderResponsive />
      <CSSTransition timeout={1200} classNames="page" key={location.pathname}>
        <div className="full-content m-0 p-0 page">
          <>{children}</>{" "}
          <footer className="text-center my-3">
            © 2020 P. All rights reserved
          </footer>
        </div>
      </CSSTransition>

      <Cursor />
    </div>
  )
}

export default Layout
