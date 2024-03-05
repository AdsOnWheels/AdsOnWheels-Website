import { RiderFormData } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialRiderFormData: RiderFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  cityRegion: "",
  postCode: "",
  bicycleType: "",
  cyclingDistance: "",
  bicycleCondition: "",
  imageUrl: "",
  regularRoutes: "",
  availability: "",
  interestReason: "",
  additionalComments: "",
  consent: false,
};

const riderFormSlice = createSlice({
  name: "riderForm",
  initialState: initialRiderFormData,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setCityRegion: (state, action: PayloadAction<string>) => {
      state.cityRegion = action.payload;
    },
    setPostCode: (state, action: PayloadAction<string>) => {
      state.postCode = action.payload;
    },
    setBicycleType: (state, action: PayloadAction<string>) => {
      state.bicycleType = action.payload;
    },
    setCyclingDistance: (state, action: PayloadAction<string>) => {
      state.cyclingDistance = action.payload;
    },
    setBicycleCondition: (state, action: PayloadAction<string>) => {
      state.bicycleCondition = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setRegularRoutes: (state, action: PayloadAction<string>) => {
      state.regularRoutes = action.payload;
    },
    setAvailability: (state, action: PayloadAction<string>) => {
      state.availability = action.payload;
    },
    setInterestReason: (state, action: PayloadAction<string>) => {
      state.interestReason = action.payload;
    },
    setAdditionalComments: (state, action: PayloadAction<string>) => {
      state.additionalComments = action.payload;
    },
    setConsent: (state, action: PayloadAction<boolean>) => {
      state.consent = action.payload;
    },
  },
});

export const {
  setFullName,
  setEmail,
  setPhoneNumber,
  setCityRegion,
  setPostCode,
  setBicycleType,
  setCyclingDistance,
  setBicycleCondition,
  setImageUrl,
  setRegularRoutes,
  setAvailability,
  setInterestReason,
  setAdditionalComments,
  setConsent,
} = riderFormSlice.actions;

const riderFormReducer = riderFormSlice.reducer;

// Define and export selectors
export const selectRiderFormData = (state: RootState) => state.riderForm;

export default riderFormReducer;
