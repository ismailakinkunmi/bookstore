import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import Navbar from "./Navbar";
import Category from "./Category";

function BookContainer() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Category />} />
      </Routes>
    </>
  );
}

export default BookContainer;
