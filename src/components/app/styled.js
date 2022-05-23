import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100vh;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: #333333;
  }
`;
