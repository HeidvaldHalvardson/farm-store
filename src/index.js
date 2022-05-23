import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/defaultTheme";

import App from "./components/app/app";

const rootElement = document.querySelector("#root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
