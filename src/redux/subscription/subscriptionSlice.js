import { createSlice } from '@reduxjs/toolkit';
import { subscription } from './operations';
const initialState = {};
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: {
    [subscription.fulfilled](state) {},
    [subscription.rejected](state) {},
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
