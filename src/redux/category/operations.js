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

export const getCategories = createAsyncThunk(
  'categories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/categories`, '', config.headers);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
