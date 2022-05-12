// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "./books/books";
import categoriesReducers from "./categories/categories";

const store = configureStore({
  reducer: {
    bookReducers,
    statusReducers,
  },

});


export default store;
