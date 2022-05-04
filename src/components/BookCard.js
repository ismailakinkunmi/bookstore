import React from "react";
import PropTypes from "prop-types";

function BookCard(props) {
  const {
    book: { title, author },
  } = props;
  return (
    <li>
      <div className="book">
        <h4>{title}</h4>
        <p>{author}</p>
        <div className="manipulation">
          <span>Comments</span>
          <button type="button">Remove</button>
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
    </li>
  );
}

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookCard;
