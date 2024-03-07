import { ContentFormData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialContentFormData: ContentFormData = {
  title: "",
  body: "",
  tag: "rider",
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
    setTag: (state, action: PayloadAction<"rider" | "brand">) => {
      state.tag = action.payload;
    },
  },
});

export const { setTitle, setBody, setTag } = contentFormSlice.actions;

const contentFormReducer = contentFormSlice.reducer;
export default contentFormReducer;
