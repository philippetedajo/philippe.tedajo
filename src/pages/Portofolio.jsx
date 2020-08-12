import React from "react";
import Layout from "../layout/Layout";
import { Home, Work, WebRealisation, StayTuned } from "../portofolio_sections";

class Portofolio extends React.Component {
  render() {
    return (
      <Layout
        allthemeProps={this.props.allProps}
        onTheme={this.props.onThemeChange}
      >
        <Home />
        <Work />
        <WebRealisation />
        <StayTuned />
      </Layout>
    );
  }
}

export default Portofolio;
