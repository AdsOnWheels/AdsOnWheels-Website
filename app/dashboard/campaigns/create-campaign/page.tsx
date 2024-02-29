"use client";

import React, { useState } from "react";

import CampaignForm, {
  CampaignFormData,
} from "../../components/forms/campaign-form/CampaignForm";
import FormInfoCard from "../../components/cards/info-cards/FormInfoCard";

const CreateCampaign = () => {
  const [formData, setFormData] = useState<CampaignFormData>({
    name: "",
    startDate: "",
    endDate: "",
    budget: 0,
  });

  const handleChange = (newFormData: CampaignFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit = (formData: CampaignFormData) => {
    // Handle form submission here
    console.log("Submitted data:", formData);
  };

  return (
    <div className="w-full p-4 mx-auto">
      <FormInfoCard title="Create New Campaign">
        <CampaignForm
          formData={formData}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        {/* Campaign Preview */}
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-4 md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-lg font-semibold mb-2">Campaign Preview</h2>
          <hr className="mb-4" />
          <div>
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {formData.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Start Date:</strong> {formData.startDate}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>End Date:</strong> {formData.endDate}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Budget:</strong> ${formData.budget}
            </p>
          </div>
        </div>
      </FormInfoCard>
    </div>
  );
};

export default CreateCampaign;
