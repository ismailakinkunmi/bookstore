import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkStatusAction } from "../redux/categories/categories";

function Category() {
  const categoryStore = useSelector((state) => state.categoriesReducers);
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkStatusAction);
  };
  return (
    <button
      type="button"
      onClick={() => {
        checkStatus();
      }}
    >
      Check Status
      {categoryStore}
    </button>
  );
}

export default Category;
