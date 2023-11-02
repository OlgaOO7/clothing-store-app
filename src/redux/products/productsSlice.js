import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './operations';
const initialState = { products: {} };
const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.fulfilled](state, action) {
      state.products = action.payload;
    },
    [getProducts.rejected](state) {
      state.products = {};
    },
  },
});

export const productsReducer = productsSlice.reducer;
