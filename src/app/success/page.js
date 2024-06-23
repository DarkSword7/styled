// app/success/page.js
"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import shibainu from "../../../public/shibainu.png";
import styled from "styled-components";
import { motion } from "framer-motion";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (session_id) {
      fetch(`/api/session?&session_id=${session_id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.order) {
            setOrder(data.order);
          } else {
            console.error("Order not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching order:", error);
        });
    }
  }, [session_id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, value]) => (
                <p key={key}>
                  {key}={value}
                </p>
              )
            )}
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Product: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price.unit_amount / 100}</p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>

        <button>
          <Link href={"/"}>Continue Shopping</Link>
        </button>
        <Image src={shibainu} alt="shiba-inu" priority />
      </Card>
    </Wrapper>
  );
};

export default function Success() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      {/* Provide a fallback UI */}
      <SuccessContent />
    </Suspense>
  );
}

const Wrapper = styled.div`
  margin: 5rem 10rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  h2 {
    margin: 0.8rem 0;
  }
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;

const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`;

const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  div {
    padding-bottom: 1rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
`;
