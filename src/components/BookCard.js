import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removedBook } from "../redux/books/books";

function BookCard() {
  const bookStore = useSelector((state) => state.bookReducers);
  const dispatch = useDispatch();

  return (
    <div>
      {bookStore.map((book) => (
        <div key={book.id}>
          <div className="book">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <div className="manipulation">
              <span>Comments</span>
              <button
                type="button"
                onClick={() => dispatch(removedBook({ id: book.id }))}
              >
                Remove
              </button>
              <span>Edit</span>
            </div>
          </div>
          <div className="progess">
            <p>64%</p>
            <p>Completed</p>
          </div>
          <div className="chapter">
            <p>CURRENT CHAPTER</p>
            <p>Chapter 17</p>
            <button type="submit">UPDATE PROGRESS</button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookCard;
