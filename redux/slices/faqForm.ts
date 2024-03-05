import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FAQFormData = {
  question: string;
  answer: string;
  tag: "rider" | "brand";
};

const initialFAQFormData: FAQFormData = {
  question: "",
  answer: "",
  tag: "rider",
};

const faqFormSlice = createSlice({
  name: "faqForm",
  initialState: initialFAQFormData,
  reducers: {
    setQuestion: (state, action: PayloadAction<string>) => {
      state.question = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
    },
    setTag: (state, action: PayloadAction<"rider" | "brand">) => {
      state.tag = action.payload;
    },
  },
});

export const { setQuestion, setAnswer, setTag } = faqFormSlice.actions;

const faqFormReducer = faqFormSlice.reducer;
export default faqFormReducer;
