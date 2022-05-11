import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  getBannerSuccess,
  getBannerFailed,
  getCategoryFailed,
  getCategorySuccess,
  getProductListFailed,
  getProductListSuccess,
} from "store/actions/productAction";

import * as actionTypes from "store/actions/actionTypes";
import client from "utils/axios";

export function* fetchBannerListAsync() {
  try {
    const response = yield client.get("/banners");
    yield put(getBannerSuccess(response.data));
  } catch (error) {
    alert(error);

    yield put(getBannerFailed(error));
  }
}

export function* fetchCategoryListAsync() {
  try {
    const response = yield client.get("/categories");
    yield put(getCategorySuccess(response.data));
  } catch (error) {
    alert(error);
    yield put(getCategoryFailed(error));
  }
}

export function* fetchProductListAsync() {
  try {
    const response = yield client.get("/products");
    yield put(getProductListSuccess(response.data));
  } catch (error) {
    alert(error);

    yield put(getProductListFailed(error));
  }
}

export function* onFetchBannerList() {
  yield takeLatest(actionTypes.GET_BANNER_START, fetchBannerListAsync);
}

export function* onFetchCategoryList() {
  yield takeLatest(actionTypes.GET_CATEGORY_START, fetchCategoryListAsync);
}

export function* onFetchProductList() {
  yield takeLatest(actionTypes.GET_PRODUCT_LIST_START, fetchProductListAsync);
}

export function* productSaga() {
  yield all([
    call(onFetchBannerList),
    call(onFetchCategoryList),
    call(onFetchProductList),
  ]);
}
