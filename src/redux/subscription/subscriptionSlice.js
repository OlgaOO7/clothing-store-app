import { createSlice } from '@reduxjs/toolkit';
import { subscription } from './operations';
const initialState = {
  isSubscribed: false,
};
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: {
    [subscription.fulfilled](state) {
      state.isSubscribed = true;
    },
    [subscription.rejected](state) {
      state.isSubscribed = false;
    },
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
