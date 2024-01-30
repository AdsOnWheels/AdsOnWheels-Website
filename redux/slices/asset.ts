import { Asset } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  assets: Asset[];
  assetValue: number;
};

const initialState: InitialState = {
  assets: [],
  assetValue: 0,
};

const assetSlice = createSlice({
  name: "averageAssetValue",
  initialState,
  reducers: {
    setAverageAssetValue: (state, action) => {
      state.assetValue = action.payload;
    },
    // Add a new reducer for classifying an asset
    classifyAsset: (
      state,
      action: PayloadAction<{ assetId: number; classification: number }>
    ) => {
      const { assetId, classification } = action.payload;
      // Find the asset to classify
      const asset = state.assets.find((a) => a.id === assetId);
      if (asset) {
        // Update its classification
        asset.classification = classification;
      } else {
        // Or handle the case where the asset isn't found
        console.warn(`Asset with id ${assetId} not found.`);
      }
    },
  },
});

export const assetActions = assetSlice.actions;
const assetReducer = assetSlice.reducer;
export default assetReducer;
