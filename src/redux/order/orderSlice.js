import { createSlice } from '@reduxjs/toolkit';
import { getOrder, placeAnOrder } from './operations';
const initialState = { order: {}, orderSuccessful: {}, isRefreshing: false };
const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOrder.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getOrder.rejected, state => {
        state.order = null;
        state.isRefreshing = false;
      })
      .addCase(placeAnOrder.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(placeAnOrder.fulfilled, (state, action) => {
        state.orderSuccessful = action.payload;
        state.isRefreshing = false;
      })
      .addCase(placeAnOrder.rejected, state => {
        state.orderSuccessful = null;
        state.isRefreshing = false;
      });
  },
});

export const orderReducer = orderSlice.reducer;
