import { createStore, combineReducers } from "redux";
import bookReducers from "./books/books";
import categoriesReducers from "./categories/categories";

const allReducers = combineReducers({
  bookReducers,
  categoriesReducers,
});

const store = createStore(allReducers);

export default store;
