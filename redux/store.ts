import { AnyAction, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    values: valueReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
function valueReducer(state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.");
}
