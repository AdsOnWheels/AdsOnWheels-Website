import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isChecked: boolean;
}

const initialState: ToggleState = {
  isChecked: false,
};

const toggleButtonSlice = createSlice({
  name: "toggleButton",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export const { toggle } = toggleButtonSlice.actions;
const buttonReducer = toggleButtonSlice.reducer;
export default buttonReducer;
