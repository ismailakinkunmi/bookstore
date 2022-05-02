import React from "react";

function Form() {
  return (
    <div>
      <h2>Add new book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <select>
          <option>Economy</option>
          <option>Science Fiction</option>
          <option>Technolgy</option>
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
