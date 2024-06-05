import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { NavBar, NavItems } from "../../styles/NavStyle";
import Cart from "./Cart";

import React from "react";

export const Nav = () => {
  return (
    <NavBar>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div>
          <ShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <Cart />
    </NavBar>
  );
};

export default Nav;
