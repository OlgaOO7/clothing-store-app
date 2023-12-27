export const selectCart = state => state.cart.cart;
export const selectTotalQunaity = state => state.cart.cart.totalQuantity;
export const selectIsRefreshing = state => state.cart.isRefreshing;
export const selectOrder = state => state.cart.order;
export const selectOrderItems = state => state.cart.order.items;

// export const selectTotalAmount = state => state.cart.totalAmount;
