"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [necessaryCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      const preferences = JSON.parse(cookieConsent);
      setAnalyticsCookies(preferences.analytics);
      setMarketingCookies(preferences.marketing);
    }
  }, []);

  const handleAcceptAll = () => {
    savePreferences(true, true);
  };

  const handleRejectNonEssential = () => {
    savePreferences(false, false);
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, analytics, marketing })
    );
    setIsVisible(false);

    // Example of sending preferences to the backend
    fetch("/api/cookie-preferences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ necessary: true, analytics, marketing }),
    });

    // Redirect user or show confirmation
    alert("Your cookie preferences have been saved.");
  };

  const handleCustomize = () => {
    setShowSettings(!showSettings);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1100] p-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg text-white">
      <div className="max-w-4xl mx-auto px-4 py-6 rounded-lg bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-3/4">
            <h2 className="text-lg font-semibold">We Value Your Privacy</h2>
            <p className="text-sm md:text-base mt-2">
              {`Our website uses cookies to enhance your experience, analyze traffic, and for personalized ads. By clicking "Accept All," you consent to our use of cookies. For more details, view our`}{" "}
              <Link
                href="/legal/cookie-policy"
                className="underline hover:text-blue-200"
              >
                Cookie Policy
              </Link>
              .
            </p>
            <p className="text-xs mt-2">
              Cookies used:{" "}
              <span className="font-semibold">
                Necessary, Analytics, Marketing
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 md:mt-0">
            <button
              className="btn btn-primary btn-sm shadow-lg"
              onClick={handleAcceptAll}
            >
              Accept All
            </button>
            <button
              className="btn btn-accent btn-sm shadow-lg"
              onClick={handleRejectNonEssential}
            >
              Reject Non-Essential
            </button>
            <button
              className="btn btn-secondary btn-sm shadow-lg"
              onClick={handleCustomize}
            >
              Customize
            </button>
          </div>
        </div>
        {showSettings && (
          <div className="mt-4">
            <div className="text-xs font-semibold">
              Customize your cookie settings:
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={necessaryCookies}
                  disabled
                />
                <span className="ml-2 text-white">
                  Necessary Cookies (required)
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={analyticsCookies}
                  onChange={(e) => setAnalyticsCookies(e.target.checked)}
                />
                <span className="ml-2 text-white">Analytics Cookies</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={marketingCookies}
                  onChange={(e) => setMarketingCookies(e.target.checked)}
                />
                <span className="ml-2 text-white">Marketing Cookies</span>
              </label>
            </div>
            <div className="mt-4">
              <button
                className="btn btn-primary btn-sm shadow-lg"
                onClick={() =>
                  savePreferences(analyticsCookies, marketingCookies)
                }
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
