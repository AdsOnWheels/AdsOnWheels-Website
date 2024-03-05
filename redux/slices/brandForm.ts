import { BrandFormData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialBrandFormData: BrandFormData = {
  company: "",
  industry: "",
  website: "",
  postCode: "",
  title: "",
  firstName: "",
  lastName: "",
  businessEmail: "",
  phone: "",
  adType: "",
  budget: "",
  targetAudience: "",
  consent: false,
};

const brandFormSlice = createSlice({
  name: "brandForm",
  initialState: initialBrandFormData,
  reducers: {
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    setIndustry: (state, action: PayloadAction<string>) => {
      state.industry = action.payload;
    },
    setWebsite: (state, action: PayloadAction<string>) => {
      state.website = action.payload;
    },
    setPostCode: (state, action: PayloadAction<string>) => {
      state.postCode = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setBusinessEmail: (state, action: PayloadAction<string>) => {
      state.businessEmail = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAdType: (state, action: PayloadAction<string>) => {
      state.adType = action.payload;
    },
    setBudget: (state, action: PayloadAction<string>) => {
      state.budget = action.payload;
    },
    setTargetAudience: (state, action: PayloadAction<string>) => {
      state.targetAudience = action.payload;
    },
    setConsent: (state, action: PayloadAction<boolean>) => {
      state.consent = action.payload;
    },
  },
});

export const {
  setCompany,
  setIndustry,
  setWebsite,
  setPostCode,
  setTitle,
  setFirstName,
  setLastName,
  setBusinessEmail,
  setPhone,
  setAdType,
  setBudget,
  setTargetAudience,
  setConsent,
} = brandFormSlice.actions;

const brandFormReducer = brandFormSlice.reducer;

// Define and export selectors
export const selectBrandFormData = (state: RootState) => state.brandForm;

export default brandFormReducer;
