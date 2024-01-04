import { createSlice } from '@reduxjs/toolkit';
import { getOrder, placeAnOrder } from './operations';
const initialState = { order: {}, orderSuccessful: {} };
const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(getOrder.rejected, state => {
        state.order = null;
      })
      .addCase(placeAnOrder.fulfilled, (state, action) => {
        state.orderSuccessful = action.payload;
      })
      .addCase(placeAnOrder.rejected, state => {
        state.orderSuccessful = null;
      });
  },
});

export const orderReducer = orderSlice.reducer;
