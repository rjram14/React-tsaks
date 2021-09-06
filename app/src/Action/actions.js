import { LOAD_PRODUCTS, ADD_CART } from "./actionTypes";
const prodData = [
  { id: 1, val: "simple product1 - 100" },
  { id: 2, val: "simple product2 - 101" },
  { id: 3, val: "simple product3 - 102" },
  { id: 4, val: "simple product4 - 103" },
  { id: 5, val: "simple product5 - 104" },
  { id: 6, val: "simple product6 - 105" },
  { id: 7, val: "simple product7 - 105" },
];
export const loadProducts = () => {
  return (dispatch) => {
    let obj = { type: LOAD_PRODUCTS, payload: prodData };
    return dispatch(obj);
  };
};

export const addCartItem = (cartItem) => {
  return (dispatch) => {
    let obj = { type: ADD_CART, payload: cartItem };
    return dispatch(obj);
  };
};
