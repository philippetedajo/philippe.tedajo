import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    margin: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 2s !important;
  }

  .App {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: "Roboto Mono", monospace;
  transition: all 0.25s linear;
  overflow-x: hidden;
  position: relative;

  }

  .wrapper_header{
  background-image: url("https://www3.assets.heroku.com/assets/home/heroku-is-for-bg-44f6c029946d5cb6d1c7f62360495a078a6e6b42acf3b1428d7cc08573c8b13b.png");
  background-repeat: no-repeat;
  background-size: 1550px;
  background-position:  center -90px ;
  }

  .wrapper_contact {
  background-image: url("https://www3.assets.heroku.com/assets/home/heroku-is-for-bg-44f6c029946d5cb6d1c7f62360495a078a6e6b42acf3b1428d7cc08573c8b13b.png");
  background-repeat: no-repeat;
  background-size: 1550px;
  background-position:  center 90px ;
  }
  
  `;
