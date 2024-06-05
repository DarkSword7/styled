import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const StateContext = ({ children }) => {
  //   set the quantity state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); // [ { id: 1, quantity: 1 }
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
    //Total price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);
    //Increase the total quantity
    setTotalQuantity((prevtotal) => prevtotal + quantity);
    // check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  // remove from cart
  const onRemove = (product) => {
    //Total price
    setTotalPrice((prevTotal) => prevTotal - product.price);
    //Decrease the total quantity
    setTotalQuantity((prevtotal) => prevtotal - 1);
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
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
        onRemove,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
