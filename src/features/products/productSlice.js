import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductsByCategory } from "./apiThunks";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allItems: [],
    categoryItems: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allItems = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryItems = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
