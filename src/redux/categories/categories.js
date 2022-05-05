// action
const STATUS = "bookstore/categories/STATUS";

const initialState = [];

// action creator

export const checkStatusAction = () => ({ type: STATUS });

// reducer

const categoriesReducers = (state = initialState, action) => {
  if (action.type === STATUS) {
    return [...state, "under construction"];
  }
  return state;
};

export default categoriesReducers;
