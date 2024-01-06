import { createSlice } from '@reduxjs/toolkit';
import {
  createCart,
  getCart,
  deleteProductFromCart,
  clearCart,
} from './operations';

const initialState = {
  cart: {},
  // totalAmount: null,
  totalQuantity: null,
  isRefreshing: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateTotalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
  },
  // reducer: { updateTotalAmount: (state, action) => { state.totalAmount = action.payload } },
  extraReducers: builder => {
    builder
      .addCase(createCart.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isRefreshing = false;
      })
      .addCase(createCart.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(getCart.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.totalQuantity = action.payload.totalQuantity;
        state.isRefreshing = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(deleteProductFromCart.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.filter(
              item => item.sku.id !== action.payload.skuId
            ),
          },
          isRefreshing: false,
          // cart: {
          //   ...state.cart,
          //   items: state.cart.items.filter(item => item.sku.id !== action.payload.id),
          // }
        };
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(clearCart.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.cart = {};
        state.totalQuantity = null;
        state.isRefreshing = false;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

// export const { updateTotalAmount } = cartSlice.actions;
export const { updateTotalQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
