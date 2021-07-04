import React from "react";
import { removeItem, incrementItem, decrementItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const Item = ({ product }) => {
  const { id, title, description, price, img, quantity } = product;
  const dispatch = useDispatch();
  if (quantity === 0) {
    dispatch(removeItem(id));
  }
  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="products" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fas fa-minus minus"
            onClick={() => dispatch(decrementItem(id))}
          ></i>
          <input type="text" placeholder={quantity} />
          <i
            className="fas fa-plus add"
            onClick={() => dispatch(incrementItem(id))}
          ></i>
        </div>
        <div className="price">
          <h3>{price * quantity} BDT</h3>
        </div>
        <div className="remove-item" onClick={() => dispatch(removeItem(id))}>
          <i className="fas fa-trash-alt remove"></i>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Item;
