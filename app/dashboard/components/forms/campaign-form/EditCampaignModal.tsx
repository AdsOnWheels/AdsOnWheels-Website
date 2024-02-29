import React, { useState } from "react";
import { Campaign } from "@/types/types";

interface EditCampaignModalProps {
  campaign: Campaign;
  onSubmit: (formData: Campaign) => void;
  onClose: () => void;
}

const EditCampaignModal: React.FC<EditCampaignModalProps> = ({
  campaign,
  onSubmit,
  onClose,
}) => {
  const [formData, setFormData] = useState<Campaign>(campaign);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Edit Campaign</h2>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Start Date:</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">End Date:</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Budget:</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCampaignModal;
