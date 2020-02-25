import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Container, Row } from "react-bootstrap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Head from "./components/Head";
import Home from "./components/Home";
import { ReactComponent as Sun } from "./assets/icons/sun-regular.svg";
import { ReactComponent as Moon } from "./assets/icons/moon-regular.svg";
import Lotties from "./toolsComponents/Lotties";
import Loader from "./assets/anim/loader.json";

function App() {
  const [theme, setTheme] = useState("lightTheme");
  const [themeName, setThemeName] = useState(<Moon />);
  const [loading, setloading] = useState(false);

  const toggleTheme = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
      setThemeName(<Sun />);
    } else {
      setTheme("lightTheme");
      setThemeName(<Moon />);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("data fetched");
      setloading(false);
    }, 2000);
  }); 

  if (loading) {
    return <Lotties animationData = {Loader} lh ="25vw" lw = "25vw" mh= "40vw" mw="40vw"/>; 
  } else {
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
}

export default App;
