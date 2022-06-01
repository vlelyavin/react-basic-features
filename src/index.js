import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const application = ReactDOM.createRoot(document.getElementById("application"));
application.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
