import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Container, Row } from "react-bootstrap";
import { About, Contact, Footer, Head, Home, Projects } from "./components";
import { ReactComponent as Sun } from "./assets/icons/sun-regular.svg";
import { ReactComponent as Moon } from "./assets/icons/moon-regular.svg";

const App = () => {
  const [setup, setSetup] = useState({
    theme: "lightTheme",
    themeIcon: <Moon />
  });

  const toggleTheme = () => {
    if (setup.theme === "lightTheme") {
      setSetup({
        theme: "darkTheme",
        themeIcon: <Sun className="icon-swt" />
      });
    } else {
      setSetup({
        theme: "lightTheme",
        themeIcon: <Moon className="icon-swt" />
      });
    }
  };

  return (
    <ThemeProvider
      theme={setup.theme === "lightTheme" ? lightTheme : darkTheme}
    >
      <Container fluid={true} className="App">
        <GlobalStyles />
        <Row className="wrapper_header d-flex flex-column ">
          <Head toggleTheme={toggleTheme} themeIcon={setup.themeIcon} />
          <Home />
        </Row>
        <Projects />
        <About />
        <Row className="wrapper_contact ">
          <Contact />
        </Row>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
