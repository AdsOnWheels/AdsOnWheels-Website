import { ContactFormData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialContactFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: initialContactFormData,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setMessage } =
  contactFormSlice.actions;

const contactFormReducer = contactFormSlice.reducer;
export default contactFormReducer;
