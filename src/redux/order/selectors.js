export const selectOrderSuccess = state => state.order?.orderSuccessful;
export const selectOrder = state => state.order?.order;
export const selectOrderItems = state => state.order.order?.items;
export const selectIsRefreshing = state => state.order?.isRefreshing;
