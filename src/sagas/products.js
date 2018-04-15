import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_END,
  ERROR_WHILE_FETCHING
} from "../types";

import MotlinApi from "../motlin";

function* loadProductsWorker() {
  try {
    const products = yield call(MotlinApi.loadProducts, null);
    // console.log(JSON.stringify(products, null, 2));
    yield put({ type: LOAD_PRODUCTS_END, payload: products });
  } catch (error) {
    yield put({ type: ERROR_WHILE_FETCHING, error: error.message });
  }
}

export const productSagas = [
  takeLatest(LOAD_PRODUCTS_START, loadProductsWorker)
];