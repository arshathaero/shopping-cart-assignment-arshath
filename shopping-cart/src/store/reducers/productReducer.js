import * as actionTypes from "store/actions/actionTypes";

export const INITIAL_STATE = {
  bannerList: [],
  isLoading: false,
  error: null,
  categoryList:[],
  productList:[]
};

export const productReducer = (
  state = INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_BANNER_START:
      return { ...state, isLoading: true };
    case actionTypes.GET_BANNER_SUCCESS:
      return { ...state, bannerList: payload, isLoading: false };
    case actionTypes.GET_BANNER_FAILED:
      return { ...state, error: payload, isLoading: false };
      case actionTypes.GET_CATEGORY_START:
        return { ...state, isLoading: true };
      case actionTypes.GET_CATEGORY_SUCCESS:
        return { ...state, categoryList: payload, isLoading: false };
      case actionTypes.GET_CATEGORY_FAILED:
        return { ...state, error: payload, isLoading: false };
    case actionTypes.GET_PRODUCT_LIST_START:
        return { ...state, isLoading: true };
        case actionTypes.GET_PRODUCT_LIST_SUCCESS:
        return { ...state, productList: payload, isLoading: false };
        case actionTypes.GET_PRODUCT_LIST_FAILED:
        return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};