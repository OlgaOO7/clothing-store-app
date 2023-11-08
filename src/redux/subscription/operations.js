import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL =
  'http://onlinestoreprojectbackend.eu-central-1.elasticbeanstalk.com/api/v1';
const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const subscription = createAsyncThunk(
  'subscription',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        `/subscriptions`,
        credentials,
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
