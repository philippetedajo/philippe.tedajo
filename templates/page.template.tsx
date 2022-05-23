import React from "react";
import { Header, Footer } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div className="page-template px-10">{children}</div>
      <Footer />
    </>
  );
}

export default PageTemplate;
