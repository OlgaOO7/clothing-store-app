import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { updateTotalAmount } from './cartSlice';
import { updateTotalQuantity } from './cartSlice';

axios.defaults.baseURL = 'https://online-store.ddns.net/api/v1';

const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const createCart = createAsyncThunk(
  'cart/createCart',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        '/carts',
        credentials,
        config.headers
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (_, thunkAPI) => {
    try {
      const userUid = localStorage.getItem('userUid');
      if (userUid) {
        const res = await axios.get(`/carts?sessionId=${userUid}`, config.headers);
        // thunkAPI.dispatch(updateTotalAmount(res.data.totalAmount);
        thunkAPI.dispatch(updateTotalQuantity(res.data.totalQuantity));
        return res.data;
      } else {
        return thunkAPI.rejectWithValue('UserUid is not available');
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteProductFromCart = createAsyncThunk(
  'cart/deleteProductFromCart',
  async (skuId, thunkAPI) => {
    try {
      const userUid = localStorage.getItem('userUid');
      if (userUid) {
        const res = await axios.delete(`/carts?sessionId=${userUid}&skuId=${skuId}`, config.headers);
        return res.data;
      } else {
        return thunkAPI.rejectWithValue('UserUid is not available');
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, thunkAPI) => {
    try {
      const userUid = localStorage.getItem('userUid');
      if (userUid) {
        const res = await axios.delete(`/carts/clear?sessionId=${userUid}`, config.headers);
        return res.data;
      } else {
        return thunkAPI.rejectWithValue('UserUid is not available');
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);