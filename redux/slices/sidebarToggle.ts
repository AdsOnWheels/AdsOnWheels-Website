import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isSidebar: boolean | undefined;
};

const initialState: InitialState = {
  isSidebar: undefined,
};

const sidebarSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.isSidebar = action.payload;
    },
  },
});

export const { toggle } = sidebarSlice.actions;
const sidebarReducer = sidebarSlice.reducer;
export default sidebarReducer;
