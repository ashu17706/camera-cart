import { all } from "redux-saga/effects";
import { productSagas } from "./products";
import { cartSagas } from "./cart";

export default function* rootSaga() {
  yield all([
    ...productSagas,
    ...cartSagas
  ]);
}
