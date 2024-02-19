import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortingState = {
  sortedColumn: string;
  sortDirection: "asc" | "desc" | "";
};

const initialSortingState: SortingState = {
  sortedColumn: "",
  sortDirection: "",
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState: initialSortingState,
  reducers: {
    setSorting: (
      state,
      action: PayloadAction<{ column: string; direction: "asc" | "desc" }>
    ) => {
      state.sortedColumn = action.payload.column;
      state.sortDirection = action.payload.direction;
    },
    clearSorting: (state) => {
      state.sortedColumn = "";
      state.sortDirection = "";
    },
  },
});

export const sortingActions = sortingSlice.actions;
const sortingReducer = sortingSlice.reducer;
export default sortingReducer;
