import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async (sessionId, thunkAPI) => {
    try {
      const res = await axios.get(
        `/carts?sessionId=${sessionId}`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const placeAnOrder = createAsyncThunk(
  'order/placeAnOrder',
  async (credentials, thunkAPI) => {
    try {
      const {
        sessionId,
        id,
        email,
        firstName,
        lastName,
        customerPhoneNumber,
        address,
      } = credentials;
      const orderDetails = {
        id: id,
        email: email,
        firstName: firstName,
        lastName: lastName,
        customerPhoneNumber: customerPhoneNumber,
        address: address,
      };
      const res = await axios.post(
        `/orders?sessionId=${sessionId}`,
        orderDetails,
        config.headers
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
