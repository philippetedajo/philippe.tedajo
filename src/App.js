import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Container, Row } from "react-bootstrap";

import { About, Contact, Footer, Head, Home, Projects } from "./components";

import { ReactComponent as Sun } from "./assets/icons/sun-regular.svg";
import { ReactComponent as Moon } from "./assets/icons/moon-regular.svg";

function App() {
  const [theme, setTheme] = useState("lightTheme");
  const [themeName, setThemeName] = useState(<Moon />);

  const toggleTheme = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
      setThemeName(<Sun className="icon-swt" />);
    } else {
      setTheme("lightTheme");
      setThemeName(<Moon className="icon-swt" />);
    }
  };

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <Container fluid={true} className="App">
        <GlobalStyles />
        <Row className="wrapper_header d-flex flex-column ">
          <Head toggleTheme={toggleTheme} themeName={themeName} />
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
}

export default App;
