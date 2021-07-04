import React from "react";
import { useSelector } from "react-redux";
const AvaiableInfo = () => {
  const { totalItems } = useSelector((state) => state.cart);
  return (
    <>
      <h1>Shopping Cart</h1>
      <p className="total-items">
        you have <span className="total-items-count">{totalItems}</span> items
        in Shopping Cart
      </p>
    </>
  );
};

export default AvaiableInfo;
