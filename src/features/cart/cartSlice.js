import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price, discont_price } = action.payload;       
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id,
          quantity: 1,
          title,
          image,
          price,
          discont_price,
        });
      }
    },
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
