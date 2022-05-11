import * as actionTypes from "store/actions/actionTypes";


export const getBannerStart = () => {
    return {
      type: actionTypes.GET_BANNER_START,
    };
  };
  
  export const getBannerSuccess = (bannerList) => {
    return {
      type: actionTypes.GET_BANNER_SUCCESS,
     payload:bannerList
    };
  };
  
  export const getBannerFailed = (error) => {
    return {
      type: actionTypes.GET_BANNER_FAILED,
      error,
    };
  };
  

  
export const getCategoryStart = () => {
  return {
    type: actionTypes.GET_CATEGORY_START,
  };
};

export const getCategorySuccess = (categoryList) => {
  return {
    type: actionTypes.GET_CATEGORY_SUCCESS,
   payload:categoryList
  };
};

export const getCategoryFailed = (error) => {
  return {
    type: actionTypes.GET_CATEGORY_FAILED,
    error,
  };
};





export const getProductListStart = () => {
  return {
    type: actionTypes.GET_PRODUCT_LIST_START,
  };
};

export const getProductListSuccess = (productList) => {
  return {
    type: actionTypes.GET_PRODUCT_LIST_SUCCESS,
   payload:productList
  };
};

export const getProductListFailed = (error) => {
  return {
    type: actionTypes.GET_PRODUCT_LIST_FAILED,
    error,
  };
};