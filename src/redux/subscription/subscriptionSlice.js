import { createSlice } from '@reduxjs/toolkit';
import { subscription, contactUs, unsubscribe } from './operations';
const initialState = {};
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(subscription.fulfilled, state => {})
      .addCase(subscription.rejected, state => {})
      .addCase(contactUs.fulfilled, state => {})
      .addCase(contactUs.rejected, state => {})
      .addCase(unsubscribe.fulfilled, state => {})
      .addCase(unsubscribe.rejected, state => {});
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
