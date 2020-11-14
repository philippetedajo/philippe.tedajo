import React from "react"
import { Header, HeaderResponsive, Cursor } from "../components"

const Layout = ({ children, location }) => {
  return (
    <div className="full-layout">
      <Header />
      <HeaderResponsive />
      <div className="full-content m-0 p-0 page">
        <>{children}</>{" "}
        <footer className="text-center my-3">
          © 2020 P. All rights reserved
        </footer>
      </div>
      <Cursor />
    </div>
  )
}

export default Layout
