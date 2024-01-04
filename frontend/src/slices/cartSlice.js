// import { createSlice } from "@reduxjs/toolkit";
// import { updateCart } from "../utils/cartUtils";

// const initialState =  localStorage.getItem("cart") ? JSON.parse
// (localStorage.getItem("cart")) : {cartItems: []};


// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         // @state: current state of cart
//         // @action: include any data inside of payload
//         // so basically in this case , we're going to be
//         // sending an item to the cart which we can access
//         // with action.payload
//         addToCart: (state, action) => {
//             // in this case item contains all the product details
//             // in some sort of array you say
//             const item = action.payload;

//             // check if an item is already in the cart
//             const existItem = state.cartItems.find((x) => x._id === item._id);

//              // if already found,
//              if(existItem){
//                 //  we want to update the quality in the cart
//                 state.cartItems.map((x) =>  x._id === existItem._id ? item : x);
//              } else {
//                 // we want to add the item to the cart
//                 // we will use spread across what already there
//                 // and finally adding the new "item"
//                 state.cartItems = [...state.cartItems, item]
//              }

//              return updateCart(state);

//         }
//     },
// });

// // in order to use this addToCart, as we will be using this from our component, we need to export this as an action
// export const { addToCart } = cartSlice.actions;


// export default cartSlice.reducer; // export the reducer to be added to the store in store.js

import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // NOTE: we don't need user, rating, numReviews or reviews
      // in the cart
      const { user, rating, numReviews, reviews, ...item } = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state, item);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state));
    },
    // NOTE: here we need to reset state for when a user logs out so the next
    // user doesn't inherit the previous users cart and shipping
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;