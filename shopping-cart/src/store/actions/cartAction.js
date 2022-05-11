import * as actionTypes from "store/actions/actionTypes";

export const addToCartStart = (productDetails) => {
  return {
    type: actionTypes.ADD_TO_CART_START,
    payload: productDetails,
  };
};

export const addToCartFailed = (error) => {
  return {
    type: actionTypes.ADD_TO_CART_FAILED,
    error,
  };
};

export const incrementCartItem = (productDetails) => {
  return {
    type: actionTypes.INCREMENT_CART_ITEM,
    payload: productDetails,
  };
};

export const decrementCartItem = (productDetails) => {
  return {
    type: actionTypes.DECREMENT_CART_ITEM,
    payload: productDetails,
  };
};

export const fetchTotal = (total) => {
  return {
    type: actionTypes.TOTAL_CART_COUNT,
    payload: total,
  };
};
