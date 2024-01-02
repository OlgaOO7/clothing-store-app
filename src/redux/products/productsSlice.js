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
  isRefreshing: false,
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
      .addCase(getSearchedProducts.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(getSearchedProducts.fulfilled, (state, action) => {
        state.productsBySearch = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getSearchedProducts.rejected, (state, action) => {
        // state.productsBySearch = [];
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(clearSearchedProducts.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(clearSearchedProducts.fulfilled, (state) => {
        state.productsBySearch = [];
        state.isRefreshing = false;
      })
      .addCase(clearSearchedProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getSearchedProductsPage.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(getSearchedProductsPage.fulfilled, (state, action) => {
        state.searchedProducts = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getSearchedProductsPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
    // .addCase(clearSearchedProductsPage.fulfilled, (state) => {
    //   state.searchedProducts = [];
    //   state.error = null;
    // })
  },
});

export const { resetSearchedProducts, setSearchedProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;