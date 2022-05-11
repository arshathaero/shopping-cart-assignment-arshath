import { all,call } from 'redux-saga/effects';

import {productSaga} from'./productSaga'
import {cartSaga} from './cartSaga';
export function* rootSaga() {
  yield all([call(productSaga),call(cartSaga)]);
}