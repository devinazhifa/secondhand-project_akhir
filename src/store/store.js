import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import notificationSlice from "./notification";
import productSlice from "./product";
import searchSlice from "./search";
import userSlice from "./user";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["product", "search", "notification"],
};

const combinedReducer = combineReducers({
  user: userSlice.reducer,
  product: productSlice.reducer,
  search: searchSlice.reducer,
  notification: notificationSlice.reducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
