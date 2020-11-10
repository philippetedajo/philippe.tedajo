import React from "react";
import { Header, HeaderResponsive, Cursor } from "../components";
import { CSSTransition } from "react-transition-group";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, location }) => {
  return (
    <div className="full-layout">
      <Header />
      <HeaderResponsive />
      <CSSTransition timeout={1200} classNames="page" key={location.pathname}>
        <div className="full-content m-0 p-0 page">
          <main>{children}</main>
          <footer className="footer">
            © {new Date().getFullYear()} <span> P. </span>All right reserved
          </footer>
        </div>
      </CSSTransition>
      <Cursor />
    </div>
  );
};

export default Layout;
