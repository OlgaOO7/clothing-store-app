import { createSlice } from '@reduxjs/toolkit';
import { subscription } from './operations';
const initialState = {};
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(subscription.fulfilled, state => {})
      .addCase(subscription.rejected, state => {});
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
