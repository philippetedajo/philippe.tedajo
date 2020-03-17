import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Container, Row } from "react-bootstrap";
import { About, Contact, Footer, Head, Home, Projects } from "./components";
import { LoadingScreen } from "./subComponents";
import { ReactComponent as Sun } from "./assets/icons/sun-regular.svg";
import { ReactComponent as Moon } from "./assets/icons/moon-regular.svg";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <ThemeProvider
        theme={setup.theme === "lightTheme" ? lightTheme : darkTheme}
      >
        <Container fluid={true} className="App">
          <GlobalStyles />
          <Row className="wrapper_header d-flex flex-column align-items-center ">
            <Head toggleTheme={toggleTheme} icon={setup.themeIcon} />
            <Home />
          </Row>
          <Projects />
          <About />
          <Row className="wrapper_contact d-flex flex-column ">
            <Contact />
            <Footer />
          </Row>
        </Container>
      </ThemeProvider>
    );
  }
};

export default App;
