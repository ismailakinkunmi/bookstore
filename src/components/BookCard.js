import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

function BookCard() {
  const bookStore = useSelector((state) => state.bookReducers);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {bookStore.map(({ title, author, id }) => (
        <div key={id}>
          <div className="book">
            <h4>{title}</h4>
            <p>{author}</p>
            <div className="manipulation">
              <span>Comments</span>
              <button type="button" onClick={() => handleRemove(id)}>
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
