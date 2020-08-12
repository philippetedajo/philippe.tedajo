import React from "react";
import { Portofolio } from "./pages";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes/Theme";
import { GlobalStyles } from "./themes/Global";
import { Helmet } from "react-helmet";

class App extends React.Component {
  state = {
    theme: "dark",
  };

  handleOnThemeChange = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? darkTheme : lightTheme}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Philippe Tedajo</title>
        </Helmet>
        <GlobalStyles />
        <Portofolio
          allProps={this.state.theme}
          onThemeChange={this.handleOnThemeChange}
        ></Portofolio>
      </ThemeProvider>
    );
  }
}

export default App;
