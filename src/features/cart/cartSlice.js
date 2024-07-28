import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, { id, title, image, price, discont_price }) => {
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
  },
  // extraReducers: builder => builder
  //     .addCase(actionName.pending, (state, { payload }) => {
  //         state.loading = true
  //     })
  //     .addCase(actionName.fulfilled, (state, { payload }) => {
  //         state.loading = false
  //     })
  //     .addCase(actionName.rejected, (state, { payload }) => {
  //         state.loading = false
  //         state.error = payload
  //     })
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
