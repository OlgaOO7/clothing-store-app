import { createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductsPagination,
  getProductsFilterByCategory,
  getProductsSortByPrice,
  getSearchedProducts
} from './operations';

const initialState = {
  products: null,
  productsCategory: null,
  productsBySearch: [],
  productsFound: false,
  visibleSearchList: false,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  // reducers: {
  //   setSearchQuery: (state, action) => {
  //     state.searchQuery = action.payload;
  //   },
  // },
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
      })
      .addCase(getProductsSortByPrice.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
      })
      .addCase(getProductsSortByPrice.rejected, state => {
        state.productsCategory = {};
      })
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.productsBySearch = action.payload;
        state.productsFound = action.payload.length > 0;
        state.visibleSearchList = true;
      })
      .addCase(getSearchedProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.productsFound = false;
        state.visibleSearchList = false;
      })
  },
});

export const productsReducer = productsSlice.reducer;
