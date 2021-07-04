import React from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import AvaiableInfo from "./AvaiableInfo";
import TotalSection from "./TotalSection";
import "../App.css";
import { getTotal} from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotal());
  }, [products]);
  return (
    <>
      <Navbar />
      <section className="main-cart-section">
        <AvaiableInfo />
        <Items products={products} />
        <TotalSection products={products} />
      </section>
    </>
  );
};

export default Cart;
