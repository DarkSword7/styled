import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { NavBar, NavItems } from "../../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../../lib/context";

import React from "react";

export const Nav = () => {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavBar>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <ShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavBar>
  );
};

export default Nav;
