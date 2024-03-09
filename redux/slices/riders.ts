import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rider } from "@/types/types";

interface RiderList {
  riders: Rider[];
}

const initialState: RiderList = {
  riders: [],
};

const ridersSlice = createSlice({
  name: "riders",
  initialState,
  reducers: {
    setRiders: (state, action: PayloadAction<Rider[]>) => {
      state.riders = action.payload;
    },
    addRider: (state, action: PayloadAction<Rider>) => {
      state.riders.push(action.payload);
    },
    removeRider: (state, action: PayloadAction<string>) => {
      state.riders = state.riders.filter(
        (rider) => rider.id !== action.payload
      );
    },
    updateRiderName: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.riders = state.riders.map((rider) => {
        if (rider.id === action.payload.id) {
          return { ...rider, name: action.payload.name };
        }
        return rider;
      });
    },
  },
});

export const { setRiders, addRider, removeRider, updateRiderName } =
  ridersSlice.actions;

export default ridersSlice.reducer;
