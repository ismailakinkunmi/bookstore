/* eslint-disable comma-dangle */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import BookContainer from "./components/BookContainer";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <Router>
      <BookContainer />
    </Router>
  </StrictMode>
);
