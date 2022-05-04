import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import BookList from "./BookList";
import Navbar from "./Navbar";
import CategoryPage from "../pages/CategoryPage";

function BookContainer() {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: "chemistry", author: "Okeke" },
  ]);

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks(...books, newBook);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<BookList books={books} addBookItemsProps={addBookItem} />}
        />
        <Route path="/Categories" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default BookContainer;
