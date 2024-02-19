import { createSlice } from "@reduxjs/toolkit";

interface TabState {
  selectedTab: string;
}

const initialState: TabState = {
  selectedTab: "blog",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;
const tabReducer = tabSlice.reducer;
export default tabReducer;
