import { createSlice } from "@reduxjs/toolkit";

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

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addedBook: (state, action) => {
      const bookData = {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(bookData);
    },

    removedBook: (state, action) => {
      const { id } = action.payload;
      const existingBook = state.find((book) => book.id === id);
      if (existingBook) {
        return state.filter((book) => book.id !== id);
      }
      return state;
    },
  },
});

export const { addedBook, removedBook } = bookSlice.actions;

export default bookSlice.reducer;
