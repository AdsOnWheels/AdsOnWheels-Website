"use client";

import React from "react";
import Link from "next/link";

import ActionPanel from "../../layout/ActionPanel";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Blogs from "./blogs/Blogs";
import FAQs from "./faqs/FAQs";
import HelpArticles from "./articles/HelpArticles";

const ContentManagement = () => {
  const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);

  const tabs = ["Blogs", "FAQs", "Help Articles"];

  return (
    <>
      {/* Section for setting up new campaigns and searching campaigns */}
      <ActionPanel
        tabs={tabs}
        buttons={[
          <Link
            key="create"
            href={`/admin/dashboard/content-management/create-${
              selectedTab === "Blogs"
                ? "post"
                : selectedTab === "FAQs"
                ? "faq"
                : "article"
            }`}
          >
            <button
              type="button"
              data-modal-toggle="create-campaign"
              className="inline-flex items-center py-2 px-3 text-sm font-bold text-center leading-normal text-white rounded-lg dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 sm:ml-auto shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            >
              <svg
                className="mr-2 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Create new{" "}
              {selectedTab === "Blogs"
                ? "post"
                : selectedTab === "FAQs"
                ? "faqs"
                : "article"}
            </button>
          </Link>,
        ]}
      />

      <div className="bg-white shadow-md rounded-2xl p-6">
        {selectedTab === "Blogs" ? (
          <Blogs />
        ) : selectedTab === "FAQs" ? (
          <FAQs />
        ) : (
          <HelpArticles />
        )}
      </div>
    </>
  );
};

export default ContentManagement;
