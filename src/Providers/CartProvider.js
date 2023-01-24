import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const CartContextDispatcher = createContext();

// base state
const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

// cart context export
export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
