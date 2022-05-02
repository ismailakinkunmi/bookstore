import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";
import Form from "./Form";

function BookList(props) {
  const { books } = props;
  return (
    <>
      <ul>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
      <Form />
    </>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default BookList;
