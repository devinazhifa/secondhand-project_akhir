// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   //   blacklist: ["search", "cart"],
// };

// const combinedReducer = combineReducers({
//   user: userSlice,
// });

// const persistedReducer = persistReducer(persistConfig, combinedReducer);

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }

// export default store;

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
import productSlice from "./product";
import userSlice from "./user";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["product"],
};

const combinedReducer = combineReducers({
  user: userSlice.reducer,
  product: productSlice.reducer,
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
