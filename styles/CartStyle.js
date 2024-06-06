import styled from "styled-components";
//Animation
import { motion } from "framer-motion";

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  img {
    width: 8rem;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    width: 10rem;
    height: 10rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    color: white;
    border: none;
    padding: 1rem 2rem;
    width: 100%;
    margin-top: 2rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: var(--secondary);
    }
  }
`;

export const Cards = styled(motion.div)``;
