import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { totalItems } = useSelector((state) => state.cart);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="images/cart.png" alt="cart" className="cart-icon" />
          <p>{totalItems}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;
