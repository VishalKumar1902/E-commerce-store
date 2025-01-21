import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      // here we are adding logic to check if product already exists in cart array so we can avoid creating the new prooduct object and can only increase the quantity
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      // there will be 2 cases if the item already in cart just change the quantity

      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        // delete state.items[indexProductId];
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;

// here we have created a place to store the value of the cart

// note redux manages state globaly but ecport functions
