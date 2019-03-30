import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { SwissProvider } from "swiss-react";

import App from "./root/App";

import "./index.css";

ReactDOM.render(
  <SwissProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SwissProvider>,
  document.getElementById("root")
);
