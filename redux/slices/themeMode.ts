import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isTheme: boolean | undefined;
};

const initialState: InitialState = {
  isTheme: undefined,
};

const themeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.isTheme = action.payload;
    },
  },
});

export const { toggle } = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
