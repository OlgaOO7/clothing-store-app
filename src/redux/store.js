import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { subscriptionReducer } from './subscription/subscriptionSlice';
import { productsReducer } from './products/productsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'subscription',
  storage,
  whitelist: ['theme'],
};

export const store = configureStore({
  reducer: {
    subscription: persistReducer(persistConfig, subscriptionReducer),
    products: persistReducer(persistConfig, productsReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
