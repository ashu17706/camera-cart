import { select, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
  UPDATE_CART,
  LOAD_CART,
  ADD_TO_CART_START,
  ERROR_WHILE_FETCHING,
  INC_PROD_QUANTITY,
  DEC_PROD_QUANTITY
} from "../types";

import MotlinApi from "../motlin";

function* addToCartWorker(action) {
  try {
    const cart = yield call(MotlinApi.addToCart, action.payload);
    yield put({ type: UPDATE_CART, payload: cart });
  } catch (error) {
    yield put({ type: ERROR_WHILE_FETCHING, error: error.message });
  }
}

function* loadCartWorker() {
  try {
    const cart = yield call(MotlinApi.getCart, null);
    yield put({ type: UPDATE_CART, payload: cart });
  } catch (error) {
    yield put({ type: ERROR_WHILE_FETCHING, error: error.message });
  }
}

function* incProdQuantityWorker(action) {
  try {
   const { itemId, qty } = action.payload;
   const cart = yield call(MotlinApi.updateItemQuantity, itemId, qty);
   yield put({ type: UPDATE_CART, payload: cart });
  } catch (error) {
    yield put({ type: ERROR_WHILE_FETCHING, error: error.message });
  }
}

function* decProdQuantityWorker(action) {
  try {
   const { itemId, qty } = action.payload;
   const cart = yield call(MotlinApi.updateItemQuantity, itemId, qty);
   yield put({ type: UPDATE_CART, payload: cart });
  } catch (error) {
    yield put({ type: ERROR_WHILE_FETCHING, error: error.message });
  }
}

export const cartSagas = [
  takeLatest(ADD_TO_CART_START, addToCartWorker),
  takeLatest(LOAD_CART, loadCartWorker),
  takeEvery(INC_PROD_QUANTITY, incProdQuantityWorker),
  takeEvery(DEC_PROD_QUANTITY, decProdQuantityWorker),
];