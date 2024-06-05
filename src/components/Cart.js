/* eslint-disable @next/next/no-img-element */
import { CircleMinus, CirclePlus, ShoppingCart } from "lucide-react";
import { useStateContext } from "../../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity,
} from "../../styles/CartStyle";

export default function Cart() {
  const { cartItems, setShowCart, decreaseQty, increaseQty } =
    useStateContext();

  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>You have more shopping to do 😉</h1>
            <ShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <Card key={item.slug}>
              <img
                src={item.image.data.attributes.formats.thumbnail.url}
                alt={item.title}
              />
              <CardInfo>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
                <Quantity>
                  <button onClick={decreaseQty}>
                    <CircleMinus />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={increaseQty}>
                    <CirclePlus />
                  </button>
                </Quantity>
              </CardInfo>
            </Card>
          ))}
      </CartStyle>
    </CartWrapper>
  );
}
