import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import history from "./utils/history";
import App from "./App";
import theme from "./theme/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
