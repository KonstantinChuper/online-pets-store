import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});

export default store;
