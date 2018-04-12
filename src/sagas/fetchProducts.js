import { call, put, takeLatest,  } from "redux-saga/effects";
import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_END,
  ERROR_WHILE_FETCHING
} from "../types";
import MotlinApi from "../motlin";

function* loadProductsWorker() {
  try {
    const products = yield call(MotlinApi, null);
    yield put({ type: LOAD_PRODUCTS_END, payload: products });
  } catch (e) {
    yield put({ type: ERROR_WHILE_FETCHING, error: e.message });
  }
}

// watcher for Products
const fetchP = function* () {
  yield takeLatest(LOAD_PRODUCTS_START, loadProductsWorker);
}

export default fetchP;