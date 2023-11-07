import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL =
  'https://onlinestoreprojectbackend-env.eba-y62nm3qd.eu-central-1.elasticbeanstalk.com/api/v1';
const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const getProducts = createAsyncThunk('products', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/products`, '', config.headers);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
