import { ActionTypes } from "../contants/actionTypes";
const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;

const initialState = {
  products: [{
      id: 1,
      title: "Best monkey in the jungle",
      category: "Man clothes"
  }],
};

// export const productReducer = (state, action) => {
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
