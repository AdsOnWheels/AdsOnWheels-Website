import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isTransparent: boolean | undefined;
};

const initialState: InitialState = {
  isTransparent: false,
};

const transparentSidebarSlice = createSlice({
  name: "transparentSidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isTransparent = !state.isTransparent;
    },
  },
});

export const { toggle } = transparentSidebarSlice.actions;
const transparentSidebarReducer = transparentSidebarSlice.reducer;
export default transparentSidebarReducer;
