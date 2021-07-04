import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems } from "../redux/cartSlice";
const TotalSection = () => {
  const { totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="card-total">
      <h3>
        Cart Total : <span>{totalAmount} BDT</span>
      </h3>
      <button>checkout</button>
      <button
        className="clear-cart"
        onClick={() => {
          if (window.confirm("Are You Sure to Delete ?")) {
            dispatch(clearAllItems());
          }
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default TotalSection;
