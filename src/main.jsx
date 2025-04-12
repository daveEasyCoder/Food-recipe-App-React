import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import GlobalState from "../Context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Food-recipe-App-React/">
    <StrictMode>
      <GlobalState>
         <App />
      </GlobalState>
    </StrictMode>
  </BrowserRouter>
);
