import { createSlice } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductsPagination,
  getProductsFilterByCategory,
  getProductsSortByPrice,
  getSearchedProducts,
  clearSearchedProducts,
  getSearchedProductsPage,
  // clearSearchedProductsPage
} from './operations';

const initialState = {
  products: null,
  productsCategory: null,
  productsBySearch: [],
  searchedProducts: [],
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetSearchedProducts: state => {
      state.productsBySearch = [];
    },
    setSearchedProducts: (state, action) => {
      state.productsBySearch = action.payload;
    },
  },
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
      })
      .addCase(getSearchedProducts.rejected, (state) => {
        state.productsBySearch = [];
      })
      .addCase(clearSearchedProducts.fulfilled, (state) => {
        state.productsBySearch = [];
        state.error = null;
      })
      .addCase(getSearchedProductsPage.fulfilled, (state, action) => {
        state.searchedProducts = action.payload;
      })
    // .addCase(clearSearchedProductsPage.fulfilled, (state) => {
    //   state.searchedProducts = [];
    //   state.error = null;
    // })
  },
});

export const { resetSearchedProducts, setSearchedProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;