import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addedBook } from "../redux/books/books";

function Form() {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const handleOnChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(
      addedBook({ id: uuidv4(), author: book.author, title: book.title })
    );

    setBook({
      title: "",
      author: "",
    });
  };

  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={(e) => submitBookToStore(e)}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          onChange={handleOnChange}
          value={book.title}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleOnChange}
          value={book.author}
        />
        <select>
          <option>Economy</option>
          <option>Science Fiction</option>
          <option>Technolgy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
