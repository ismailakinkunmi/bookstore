// action
const STATUS = "bookstore/categories/STATUS";

const initialState = [];

// action creator

export const checkStatus = () => ({ type: STATUS });

// reducer

const statusReducers = (state = initialState, action) => {
  if (action.type === STATUS) {
    return "Under Construction";
  }
  return state;
};

export default statusReducers;
