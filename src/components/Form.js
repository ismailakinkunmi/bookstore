import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../redux/books/books";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add new book</h2>
      <form
        action="#"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Book title"
          onChange={(e) => {
            handleTitleChange(e);
          }}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => {
            handleAuthorChange(e);
          }}
        />
        <select>
          <option>Economy</option>
          <option>Science Fiction</option>
          <option>Technolgy</option>
        </select>
        <button
          type="submit"
          onClick={(e) => {
            submitBookToStore(e);
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
