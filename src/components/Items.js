import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
const Items = ({ products }) => {
  return (
    <>
      <div className="cart-items">
        <div className="cart-items-container">
          <Scrollbars>
            {products.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </Scrollbars>
        </div>
      </div>
    </>
  );
};

export default Items;
