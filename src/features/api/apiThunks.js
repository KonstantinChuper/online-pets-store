import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:3333";

export const getAllCategories = createAsyncThunk("categories/getAll", async () => {
  const response = await axios.get(`${API_BASE_URL}/categories/all`);
  return response.data;
});

export const getProductsByCategory = createAsyncThunk("products/getByCategory", async (categoryId) => {
  const response = await axios.get(`${API_BASE_URL}/categories/${categoryId}`);
  return response.data;
});

export const getAllProducts = createAsyncThunk("products/getAll", async () => {
  const response = await axios.get(`${API_BASE_URL}/products/all`);
  return response.data;
});

export const getProductById = createAsyncThunk("products/getById", async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
});

export const sendOrder = createAsyncThunk("order/send", async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/order/send`, orderData);
  return response.data;
});

export const sendCouponRequest = createAsyncThunk("sale/sendCoupon", async (couponData) => {
  const response = await axios.post(`${API_BASE_URL}/sale/send`, couponData);
  return response.data;
});
