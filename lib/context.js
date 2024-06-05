import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const StateContext = ({ children }) => {
  //   set the quantity state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); // [ { id: 1, quantity: 1 }
  const [quantity, setQuantity] = useState(1);

  // increment the quantity
  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  // decrement the quantity
  const decreaseQty = () => {
    setQuantity((prevQty) => (prevQty === 1 ? 1 : prevQty - 1));
  };
  // add to cart
  const onAdd = (product, quantity) => {
    // check if the product is already in the cart
    const exist = cartItems.find((item) => item.id === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        quantity,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
