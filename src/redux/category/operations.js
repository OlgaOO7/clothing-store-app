import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL =
//   'http://onlinestoreprojectbackend-env.eba-y62nm3qd.eu-central-1.elasticbeanstalk.com/api/v1';

axios.defaults.baseURL = 'http://onlinestoreprojectbackend.eu-central-1.elasticbeanstalk.com/api/v1';

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
