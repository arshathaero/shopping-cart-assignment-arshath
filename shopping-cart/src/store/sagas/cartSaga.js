import { takeLatest, all, call, put } from "redux-saga/effects";

import { addToCartFailed, incrementCartItem } from "store/actions/cartAction";

import * as actionTypes from "store/actions/actionTypes";
import client from "utils/axios";

export function* addTocartAsync(action) {
  let data= {
    id:action.payload.id
  }
  
  try {
    yield client.post("/addtocart",JSON.stringify(data));
    yield put(incrementCartItem(action.payload));
  } catch (error) {
    alert(error);

    yield put(addToCartFailed(error));
  }
}

export function* onAddTocart() {
  yield takeLatest(actionTypes.ADD_TO_CART_START, addTocartAsync);
}

export function* cartSaga() {
  yield all([call(onAddTocart)]);
}
