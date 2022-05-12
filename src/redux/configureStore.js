// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "./books/books";
import statusReducers from "./categories/categories";

const store = configureStore({
  reducer: {
    bookReducers,
    statusReducers,
  },
});

// const allReducers = combineReducers({
//   bookReducers,
//   statusReducers,
// });

// const store = createStore(allReducers);

export default store;
