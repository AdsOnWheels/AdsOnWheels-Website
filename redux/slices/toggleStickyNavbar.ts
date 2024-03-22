import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isSticky: boolean;
}

const initialState: ToggleState = {
  isSticky: false,
};

const toggleStickyNavbarSlice = createSlice({
  name: "stickyNavbar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isSticky = !state.isSticky;
    },
  },
});

export const { toggle } = toggleStickyNavbarSlice.actions;
const toggleStickyNavbarReducer = toggleStickyNavbarSlice.reducer;
export default toggleStickyNavbarReducer;
