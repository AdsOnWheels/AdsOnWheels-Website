import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./slices/sidebarToggle";
import campaignReducer from "./slices/campaign";
import sortingReducer from "./slices/sorting";
import paginationReducer from "./slices/pagination";
import buttonReducer from "./slices/buttonToggle";
import tabReducer from "./slices/tab";
import themeReducer from "./slices/themeMode";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    toggleSidebar: sidebarReducer,
    toggleButton: buttonReducer,
    action: campaignReducer,
    sorting: sortingReducer,
    pagination: paginationReducer,
    toggleTheme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
