import { LOAD_PRODUCTS_START, LOAD_PRODUCTS_END, UPDATE_CART } from "../types";

const initialState = {
  products: [],
  cart: [],
  totalCartPrice: 0,
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case LOAD_PRODUCTS_START:
      return { 
        ...state,
        loading: true
      };


    case LOAD_PRODUCTS_END:
      return { 
          ...state,
          products: [...action.payload],
          loading: false,
          loaded: true 
      };

    case UPDATE_CART:
      return {
        ...state,
        cart: [...action.payload.data],
        totalCartPrice: action.payload.meta.display_price.with_tax.formatted
      };

    default:
      return state;
  }
};