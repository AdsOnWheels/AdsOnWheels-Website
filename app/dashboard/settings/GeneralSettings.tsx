"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

interface Version {
  id: number;
  versionNumber: number;
  date: string;
  author: string;
  changes: string;
}

const versionHistory = [
  {
    id: 1,
    versionNumber: 1,
    date: "2024-02-20",
    author: "Admin User",
    changes: "Initial version of settings",
  },
  {
    id: 2,
    versionNumber: 2,
    date: "2024-02-21",
    author: "Admin User",
    changes: "Updated Privacy Policy",
  },
  // Add more versions as needed
];

const GeneralSettings = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState("");
  const [termsOfService, setTermsOfService] = useState("");
  const [legalSettings, setLegalSettings] = useState("");
  //   const [versionHistory, setVersionHistory] = useState<Version>([]);
  const [selectedVersion, setSelectedVersion] = useState<number>();

  const handlePrivacyPolicyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrivacyPolicy(e.target.value);
  };

  const handleTermsOfServiceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTermsOfService(e.target.value);
  };

  const handleLegalSettingsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLegalSettings(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement logic to save changes to the documents
    console.log("Privacy Policy:", privacyPolicy);
    console.log("Terms of Service:", termsOfService);
    console.log("Legal Settings:", legalSettings);
  };

  const handleVersionSelect = (version: number) => {
    // Set the selected version and update the document content
    setSelectedVersion(version);
    // Fetch and update document content based on the selected version
  };

  return (
    <div className="w-full md:w-1/2 px-3 mb-6">
      <div className="bg-white dark:bg-gray-950 dark:shadow-xl rounded-2xl">
        <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
          <h6 className="mb-0 dark:text-white">General Settings</h6>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex-auto p-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="privacyPolicy"
            >
              Privacy Policy
            </label>
            <textarea
              id="privacyPolicy"
              name="privacyPolicy"
              rows={5}
              className="mt-1 block w-full px-4 py-2 shadow-sm focus:ring-blue-500 focus:shadow-blue-500 dark:bg-gray-950 dark:placeholder:text-white/80 text-sm leading-5 ease-linear appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              value={privacyPolicy}
              onChange={handlePrivacyPolicyChange}
            ></textarea>
            {/* Version History */}
            {versionHistory.length > 0 && (
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 p-2">
                  Version History
                </label>
                <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {versionHistory.map((version) => (
                    <li
                      key={version.id}
                      onClick={() => handleVersionSelect(version.id)}
                      className={`cursor-pointer shadow-md focus:ring-blue-500 focus:shadow-blue-500 dark:bg-gray-950 text-sm leading-5 ease-linear appearance-none rounded-lg bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none ${
                        selectedVersion === version.id
                          ? "dark:bg-blue-500 bg-blue-200 dark:text-white/80 text-blue-500"
                          : "dark:bg-gray-500 bg-gray-100 dark:text-white/70 text-gray-500"
                      } px-3 py-2 rounded-md`}
                    >
                      Version {version.versionNumber}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Terms of Service */}
          <div className="flex-auto p-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="termsOfService"
            >
              Terms of Service
            </label>
            <textarea
              id="termsOfService"
              name="termsOfService"
              rows={5}
              className="mt-1 block w-full px-4 py-2 shadow-sm focus:ring-blue-500 focus:shadow-blue-500 dark:bg-gray-950 dark:placeholder:text-white/80 text-sm leading-5 ease-linear appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              value={termsOfService}
              onChange={handleTermsOfServiceChange}
            ></textarea>
          </div>
          {/* Legal Settings */}
          <div className="flex-auto p-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="legalSettings"
            >
              Legal Settings
            </label>
            <textarea
              id="legalSettings"
              name="legalSettings"
              rows={5}
              className="mt-1 block w-full px-4 py-2 shadow-sm focus:ring-blue-500 focus:shadow-blue-500 dark:bg-gray-950 dark:placeholder:text-white/80 text-sm leading-5 ease-linear appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              value={legalSettings}
              onChange={handleLegalSettingsChange}
            ></textarea>
          </div>
          {/* Save Changes Button */}
          <div className="flex-auto p-4">
            <button
              type="submit"
              className="inline-block px-8 py-2 m-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight-rem bg-gradient-to-tl from-blue-500 to-violet-500 hover:-translate-y-px active:opacity-85"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      {/* Additional features such as document previews and metadata display can be added here */}
    </div>
  );
};

export default GeneralSettings;
