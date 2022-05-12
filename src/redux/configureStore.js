import { configureStore } from "@reduxjs/toolkit";
import bookReducers from "./books/books";
import statusReducers from "./categories/categories";

const store = configureStore({
  reducer: {
    bookReducers,
    statusReducers,
  },
});

export default store;
