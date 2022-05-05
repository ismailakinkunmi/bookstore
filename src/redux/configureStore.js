import { createStore, combineReducers } from "redux";
import bookReducers from "./books/books";
import statusReducers from "./categories/categories";

const allReducers = combineReducers({
  bookReducers,
  statusReducers,
});

const store = createStore(allReducers);

export default store;
