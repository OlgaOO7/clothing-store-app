import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './operations';
const initialState = { categories: [] };
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, state => {
        state.categories = [];
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
