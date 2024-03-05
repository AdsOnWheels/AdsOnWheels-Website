import { ContentFormData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialContentFormData: ContentFormData = {
  title: "",
  body: "",
};

const contentFormSlice = createSlice({
  name: "contentForm",
  initialState: initialContentFormData,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
  },
});

export const { setTitle, setBody } = contentFormSlice.actions;

const contentFormReducer = contentFormSlice.reducer;
export default contentFormReducer;
