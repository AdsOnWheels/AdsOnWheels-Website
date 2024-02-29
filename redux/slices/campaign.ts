import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialCampaigns from "@/app/dashboard/components/data/campaignData/initialCampaigns";
import { Campaign } from "@/types/types";

interface CampaignState {
  campaigns: Campaign[];
}

const initialState: CampaignState = {
  campaigns: initialCampaigns,
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    editCampaign: (state, action: PayloadAction<Campaign>) => {
      const { id } = action.payload;
      state.campaigns = state.campaigns.map((campaign) =>
        campaign.id === id ? action.payload : campaign
      );
    },
    pauseCampaign: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.campaigns = state.campaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, status: "Paused" } : campaign
      );
    },
    resumeCampaign: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.campaigns = state.campaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, status: "Active" } : campaign
      );
    },
    deleteCampaign: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.campaigns = state.campaigns.filter(
        (campaign) => campaign.id !== id
      );
    },
  },
});

export const { editCampaign, pauseCampaign, resumeCampaign, deleteCampaign } =
  campaignSlice.actions;

const campaignReducer = campaignSlice.reducer;

export default campaignReducer;
