import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { NavBar, NavItems } from "../../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../../lib/context";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0/client";

import React from "react";
import User from "./User";

export const Nav = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const { user, error, isLoading } = useUser();
  return (
    <NavBar>
      <Link href="/">Styled.</Link>
      <NavItems>
        <User />
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
