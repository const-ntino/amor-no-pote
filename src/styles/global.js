import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    background-color: #f7f7f2;
    color: #F7F7F2;
    font-size: 1.8rem;
    font-family: Overpass, sans-serif;
  }
`;

export default GlobalStyles;
