import * as actionTypes from "store/actions/actionTypes";
import { addcart, removeCart } from "utils/service";
export const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  error: "",
  total: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_TO_CART_START:
      return { ...state };

    case actionTypes.INCREMENT_CART_ITEM: {
      return {
        ...state,
        cartList: addcart(state.cartList, payload),
        cartCount: state.cartCount + 1,
      };
    }
    case actionTypes.DECREMENT_CART_ITEM: {
      return {
        ...state,
        cartList: removeCart(state.cartList, payload),
        cartCount: state.cartCount - 1,
      };
    }
    case actionTypes.TOTAL_CART_COUNT:
      return { ...state, total: payload };
    case actionTypes.ADD_TO_CART_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};
