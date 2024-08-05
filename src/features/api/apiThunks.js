import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://pet-shop-backend.slavab.kz";

export const getAllCategories = createAsyncThunk("categories/getAll", async () => {
  const response = await axios.get(`${API_URL}/categories/all`);
  return response.data;
});

