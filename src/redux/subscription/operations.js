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
export const contactUs = createAsyncThunk(
  'contactUs',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        `/contact_information/send_email`,
        {
          name: credentials.name,
          email: credentials.email,
          textMessage: credentials.message,
        },
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unsubscribe = createAsyncThunk(
  'unsubscribe',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.delete(
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
