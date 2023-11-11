import { createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductsPagination,
  getProductsFilterByCategory,
} from './operations';
const initialState = { products: null, productsCategory: null };
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
      })
      .addCase(getProductsPagination.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      })
      .addCase(getProductsPagination.rejected, state => {
        state.productsCategory = {};
      })
      .addCase(getProductsFilterByCategory.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      })
      .addCase(getProductsFilterByCategory.rejected, state => {
        state.productsCategory = {};
      });
  },
});

export const productsReducer = productsSlice.reducer;
