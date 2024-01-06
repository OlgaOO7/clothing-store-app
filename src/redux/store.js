import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import { subscriptionReducer } from './subscription/subscriptionSlice';
import { categoriesReducer } from './category/categorySlice';
import { productsReducer } from './products/productsSlice';
import { cartReducer } from './cart/cartSlice';
import { orderReducer } from './order/orderSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'subscription',
//   storage,
// };

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

// export const persistor = persistStore(store);
