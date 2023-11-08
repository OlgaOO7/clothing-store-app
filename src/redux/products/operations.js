import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL =
//   'http://onlinestoreprojectbackend.eu-central-1.elasticbeanstalk.com/api/v1';
axios.defaults.baseURL = 'https://online-store-project-backend.onrender.com/api/v1';

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
