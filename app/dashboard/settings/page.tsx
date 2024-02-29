"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import BrandSubscription from "./BrandSubscription";
import GeneralSettings from "./GeneralSettings";
import AccountSettings from "./AccountSettings";

const Settings = () => {
  // State for settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "",
    siteDescription: "",
  });
  const [securitySettings, setSecuritySettings] = useState({
    enableTwoFactorAuth: false,
  });
  const [notificationSettings, setNotificationSettings] = useState({
    receiveEmails: true,
  });

  // Handlers for changes in settings
  const handleGeneralSettingsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGeneralSettings({ ...generalSettings, [e.target.name]: e.target.value });
  };

  const handleSecuritySettingsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecuritySettings({
      ...securitySettings,
      [e.target.name]: e.target.checked,
    });
  };

  const handleNotificationSettingsChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked,
    });
  };

  // Submit handler for settings (replace with actual implementation)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ generalSettings, securitySettings, notificationSettings });
    // Submit settings data here
  };

  return (
    <div>
      <div className="flex flex-wrap -mx-3">
        {/* General Settings Section */}
        <GeneralSettings />
        {/* Payment and Subscription Plans Section */}
        <BrandSubscription />
        {/* APIs and Integrations Section */}
        <div className="w-full px-3 mb-6">
          <div className="bg-white dark:bg-slate-850 dark:shadow-dark-xl rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              APIs and Integrations
            </h2>
            {/* Placeholder for managing API integrations */}
            <p>Managing API Integrations components go here</p>
          </div>
        </div>
      </div>
      {/* Account Settings Section */}
      <AccountSettings />
    </div>
  );
};

export default Settings;
