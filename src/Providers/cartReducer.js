import { ADD_TO_CART, REMOVE_PRODUCT } from "./types";

// increasing product function
const addProductToCart = (state, payload) => {
  // clone context data
  const updatedCart = [...state.cart];
  //   get the item index
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id,
  );
  //   if there is no product
  if (updatedItemIndex < 0) {
    // 1. product push
    // 2. clone is product
    // 3. add value property
    updatedCart.push({ ...payload, quantity: 1 });
  } else {
    // if there was a product
    // get a clone of all the products
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    // add quantity
    updatedItem.quantity++;
    // update the desired product
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
  };
};
// diminishing product function
const removeProductFromCart = (state, payload) => {
  // clone context data
  const updatedCart = [...state.cart];
  //   get the item index
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id,
  );
  // clone is product
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  //   if the balance is equal to one
  if (updatedItem.quantity === 1) {
    const filterCart = updatedCart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: filterCart,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
  };
};

// passing values to reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return addProductToCart(state, action.payload);
    }
    case REMOVE_PRODUCT: {
      return removeProductFromCart(state, action.payload);
    }
    default:
      return state;
  }
};

export default cartReducer;
