// Actions
const ADDED_BOOK = "bookstore/books/ADDED_BOOK";
const REMOVED_BOOK = "bookstore/books/REMOVED_BOOK";

const initialState = [
  {
    id: 1,
    title: "redux book",
    author: "redux",
  },
  {
    id: 2,
    title: "react book",
    author: "react",
  },
  {
    id: 3,
    title: "javascript book",
    author: "vanilla",
  },
];

// action creators
export const addBook = (payload) => ({ type: ADDED_BOOK, payload });

export const removeBook = (bookId) => ({ type: REMOVED_BOOK, id: bookId });

const bookReducers = (state = initialState, action) => {
  if (action.type === ADDED_BOOK) {
    return [...state, action.payload];
  }
  if (action.type === REMOVED_BOOK) {
    return state.filter((book) => book.id !== action.id);
  }
  return state;
};

export default bookReducers;
