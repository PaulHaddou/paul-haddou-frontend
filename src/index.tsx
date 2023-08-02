import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import "./i18n";

const rootDiv = document.getElementById("root");
const root = createRoot(rootDiv as Element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
