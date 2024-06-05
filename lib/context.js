import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <CartContext.Provider value={{ quantity }}>{children}</CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
