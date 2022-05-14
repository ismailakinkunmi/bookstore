import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const BookCard = ({ id, title, category }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VFbcOva4gydD84rw77of/books/${id}`,
      {
        method: "DELETE",
      }
    );

    dispatch(removeBook({ id }));
  };

  return (
    <>
      <div className="details">
        <span className="category">{category}</span>
        <h3 className="title">{title.split(" , ")[0]}</h3>
        <p className="author">{title.split(" , ")[1]}</p>
        <div className="actions">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="chapter">
        <span>CURRENT CHAPTER</span>
        <p>Chapter 7</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookCard;
