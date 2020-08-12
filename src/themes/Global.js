import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.3s ;
  }

  #mouse-dot{
    background-color: ${({ theme }) => theme.cursor}
  }

  /* ScrollBar */
  ::-webkit-scrollbar {
  width: 10px;
  }
  ::-webkit-scrollbar-thumb {
  background: #363537;
  border-radius: 10px;
 }
 ::-webkit-scrollbar-track {
  background: #E5E6EA
 }
  `;
