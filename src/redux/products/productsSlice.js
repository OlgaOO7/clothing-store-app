import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './operations';
const initialState = { products: {} };
const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, state => {
        state.products = {};
      });
  },
});

export const productsReducer = productsSlice.reducer;
