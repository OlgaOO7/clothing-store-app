import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
        `/products?page=${page.page}&size=12&sort=title`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getProductsFilterByCategory = createAsyncThunk(
  'products/getFilteredProducts',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(
        `/products?page=${credentials.page}&size=12&sort=title&categoryId=${credentials.categoryId}`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
