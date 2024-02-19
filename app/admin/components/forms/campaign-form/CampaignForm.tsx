"use client";

import React from "react";

interface CampaignFormProps {
  formData: CampaignFormData;
  onSubmit: (formData: CampaignFormData) => void;
  onChange: (newFormData: CampaignFormData) => void;
}

export interface CampaignFormData {
  name: string;
  startDate: string;
  endDate: string;
  budget: number;
}

const CampaignForm: React.FC<CampaignFormProps> = ({
  formData,
  onSubmit,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // bg-white px-8 pt-6 pb-8 mb-4

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto min-w-0 p-4 break-words bg-white border-0 opacity-100 dark:bg-slate-850 bg-clip-border"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Campaign Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          placeholder="Enter campaign name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="startDate"
        >
          Start Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="startDate"
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="endDate"
        >
          End Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="endDate"
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="budget"
        >
          Budget (€)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="budget"
          type="number"
          name="budget"
          placeholder="Enter budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem bg-gradient-to-tl from-blue-500 to-violet-500 hover:-translate-y-px active:opacity-85"
        >
          Create Campaign
        </button>
      </div>
    </form>
  );
};

export default CampaignForm;
