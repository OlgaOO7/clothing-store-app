import { createSlice } from '@reduxjs/toolkit';
import {
  createCart,
  getCart,
  deleteProductFromCart,
  clearCart,
  getOrder,
} from './operations';

const initialState = {
  cart: {},
  order: {},
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
      .addCase(createCart.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(getCart.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.totalQuantity = action.payload.totalQuantity;
        state.isRefreshing = false;
      })
      .addCase(getCart.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        console.log('Delete product fulfilled:', action.payload);
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.filter(
              item => item.sku.id !== action.payload.id
            ),
          },
        };
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.cart = {};
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(getOrder.rejected, state => {
        state.order = null;
      });
  },
});

// export const { updateTotalAmount } = cartSlice.actions;
export const { updateTotalQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
