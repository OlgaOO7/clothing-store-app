import { createSlice } from '@reduxjs/toolkit';
import { subscription } from './operations';
const initialState = {
  isSubscribed: false,
  isValid: true,
};
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: {
    [subscription.fulfilled](state) {
      state.isSubscribed = true;
      state.isValid = true;
    },
    [subscription.rejected](state) {
      state.isSubscribed = false;
      state.isValid = false;
    },
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
