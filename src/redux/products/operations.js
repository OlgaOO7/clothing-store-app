import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL =
//   'https://online-store-project-backend.onrender.com/api/v1';

axios.defaults.baseURL = 'https://online-store.ddns.net/api/v1';

const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const getProducts = createAsyncThunk(
  'products/getNews',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/products`, '', config.headers);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getProductsPagination = createAsyncThunk(
  'products/getAll',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(
        `/products?page=${page.page}&size=3&sort=title`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
