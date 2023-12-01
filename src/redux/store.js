import { configureStore } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage';


import { contactsReducer } from "./phone.reduser";
import { authReducer } from "./auth/auth.reducer";

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  // or blacklist
};
export const store = configureStore( {
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authConfig, authReducer),
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

