import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { resetSearchedProducts } from './productsSlice';

axios.defaults.baseURL = 'https://online-store.ddns.net/api/v1';

const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const getProducts = createAsyncThunk(
  'products/getNews',
  async (size, thunkAPI) => {
    try {
      const res = await axios.get(
        `/products?page=0&size=${size.size}&sort=createdAt`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsPagination = createAsyncThunk(
  'products/getAll',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(
        `/products?page=${credentials.page}&size=12${
          credentials?.sort ? `&sort=${credentials.sort}` : ``
        }`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsFilterByCategory = createAsyncThunk(
  'products/getFilteredProducts',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(
        `/products?page=${credentials.page}&size=12&sort=${credentials.sort}${
          credentials.selectedCategory >= 1
            ? `&categoryId=${credentials.selectedCategory}`
            : ''
        }&categoryId=${credentials.categoryId}`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsSortByPrice = createAsyncThunk(
  'products/getSortedProducts',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(
        `/products?page=${credentials.page}&size=12&sort=${credentials.sort}${
          credentials.selectedCategory >= 1
            ? `&categoryId=${credentials.selectedCategory}`
            : ''
        }`,
        '',
        config.headers
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchedProducts = createAsyncThunk(
  'products/getProductsBySearch',
  async (searchQuery, thunkAPI) => {
    try {
      const res = await axios.get(
        `products?title=${searchQuery}`,
        config.headers
      );
      return res.data.content;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getSearchedProductsPage = createAsyncThunk(
  'products/getProductsBySearchPage',
  async (searchQuery, thunkAPI) => {
    try {
      const res = await axios.get(
        `products?title=${searchQuery}`,
        config.headers
      );
      return res.data.content;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearSearchedProducts = createAsyncThunk(
  'products/clearSearchedProducts',
  async (_, { dispatch }) => {
    dispatch(resetSearchedProducts());
  }
);

// export const clearSearchedProductsPage = createAsyncThunk(
//   'products/clearSearchedProductsPage',
//   async (_, { dispatch }) => {
//     dispatch(resetSearchedProducts());
//   }
// );
