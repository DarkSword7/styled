import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { NavBar, NavItems } from "../../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../../lib/context";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

export const Nav = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <NavBar>
      <Link href="/">Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantity > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantity}
            </motion.span>
          )}
          <ShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavBar>
  );
};

export default Nav;
