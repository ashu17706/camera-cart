import { LOAD_PRODUCTS_START, LOAD_PRODUCTS_END } from "../types";

const initialState = {
  products: [],
  loading: false,
  loaded: false,
  error: null
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case LOAD_PRODUCTS_START:
      return { ...state, loading: true };

    case LOAD_PRODUCTS_END:
      return { ...state, loading: false, loaded: true, products: action.payload.data };
    default:
      return state;
  }
};