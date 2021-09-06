import { ADD_CART, CART_LOAD, LOAD_PRODUCTS } from "../Action/actionTypes";
export const initialState = { products: [], itemsInCart: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const prods = action.payload;
      return {
        ...state,
        products: prods,
      };
    }
    case ADD_CART: {
      const cartItem = action.payload;
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, ...cartItem],
      };
    }
    default:
      return state;
  }
}
