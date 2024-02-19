import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PaginationState = {
  currentPage: number;
  pageSize: number;
};

const initialPaginationState: PaginationState = {
  currentPage: 0,
  pageSize: 10,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialPaginationState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
const paginationReducer = paginationSlice.reducer;
export default paginationReducer;
