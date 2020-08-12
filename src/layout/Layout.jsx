import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

class Layout extends React.Component {
  render() {
    return (
      <>
        <LayoutContainer fluid>
          <Header
            onALLthemeProps={this.props.allthemeProps}
            onTheming={this.props.onTheme}
          />
          <div>
            <main>{this.props.children}</main>
            <footer></footer>
          </div>
          <Footer />
        </LayoutContainer>
      </>
    );
  }
}

export default Layout;

const LayoutContainer = styled(Container)`
  padding: 4rem 9rem;

  @media (max-width: 992px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`;
