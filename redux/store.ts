import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./slices/sidebarToggle";
import campaignReducer from "./slices/campaign";
import sortingReducer from "./slices/sorting";
import paginationReducer from "./slices/pagination";
import toggleStickyNavbarReducer from "./slices/toggleStickyNavbar";
import tabReducer from "./slices/tab";
import themeReducer from "./slices/themeMode";
import imageUploadReducer from "./slices/imageUpload";
import faqFormReducer from "./slices/faqForm";
import contactFormReducer from "./slices/contactForm";
import brandFormReducer from "./slices/brandForm";
import riderFormReducer from "./slices/riderForm";
import contentFormReducer from "./slices/contentForm";
import transparentSidebarReducer from "./slices/transparentSidebar";

export const store = configureStore({
  reducer: {
    action: campaignReducer,
    brandForm: brandFormReducer,
    contactForm: contactFormReducer,
    contentForm: contentFormReducer,
    faqForm: faqFormReducer,
    imageUpload: imageUploadReducer,
    pagination: paginationReducer,
    riderForm: riderFormReducer,
    sorting: sortingReducer,
    tab: tabReducer,
    toggleSidebar: sidebarReducer,
    toggleStickyNavbar: toggleStickyNavbarReducer,
    toggleTransparentSidebar: transparentSidebarReducer,
    toggleTheme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
