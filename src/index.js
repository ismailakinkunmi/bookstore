/* eslint-disable comma-dangle */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import BookContainer from "./components/BookContainer";
import store from "./redux/configureStore";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <BookContainer />
      </Router>
    </Provider>
  </StrictMode>
);
