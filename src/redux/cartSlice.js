import { createSlice } from "@reduxjs/toolkit";
import { products } from "../products";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: products,
    totalItems: 0,
    totalAmount: 0,
  },
  reducers: {
    //Remove items
    removeItem: (state, action) => {
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = newProducts;
    },

    //Increment Items
    incrementItem: (state, action) => {
      const updatedProduct = state.products.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return { ...state, products: updatedProduct };
    },

    //DecrementItems
    decrementItem: (state, action) => {
      let updatedProduct = state.products.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      return { ...state, products: updatedProduct };
    },

    //clearAllItems
    clearAllItems: (state) => {
      return { ...state, products: [] };
    },

    //get total items && totlaAmount
    getTotal: (state) => {
      let { totalItems, totalAmount } = state.products.reduce(
        (a, c) => {
          let { quantity, price } = c;
          let updatedTotalPrice = quantity * price;
          a.totalAmount += updatedTotalPrice;
          a.totalItems += quantity;
          return a;
        },
        { totalItems: 0, totalAmount: 0 }
      );
      return { ...state, totalItems, totalAmount };
    },
  },
});
export const {
  removeItem,
  incrementItem,
  decrementItem,
  clearAllItems,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
