import { createSlice } from '@reduxjs/toolkit';
import { subscription } from './operations';
const initialState = {
  isSubscriptionSuccess: false,
};
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: {
    [subscription.fulfilled](state) {
      state.isSubscriptionSuccess = true;
    },
    [subscription.rejected](state) {
      state.isSubscriptionSuccess = false;
    },
  },
});

export const subscriptionReducer = subscriptionSlice.reducer;
