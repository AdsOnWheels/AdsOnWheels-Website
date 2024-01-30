import { configureStore } from "@reduxjs/toolkit";

import valueReducer from "./slices/asset";

export const store = configureStore({
  reducer: {
    values: valueReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
