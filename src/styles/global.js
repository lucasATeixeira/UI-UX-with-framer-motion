import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  body {
    width: 100vw;
    height: 100vh;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    overflow: hidden;
    background: #0055ff;
  }
  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`;

export default GlobalStyle;
