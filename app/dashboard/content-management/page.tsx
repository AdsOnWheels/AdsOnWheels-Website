"use client";

import React, { PropsWithChildren } from "react";
import Link from "next/link";

import ActionPanel from "../layout/ActionPanel";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ContentManagement = ({ children }: PropsWithChildren) => {
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
            href={`/dashboard/content-management/${
              selectedTab === "Help Articles"
                ? "articles"
                : selectedTab === "FAQs"
                ? "faqs"
                : "blogs"
            }/create-${
              selectedTab === "Help Articles"
                ? "article"
                : selectedTab === "FAQs"
                ? "faq"
                : "post"
            }`}
          >
            <button
              type="button"
              data-modal-toggle="create-campaign"
              className="inline-flex items-center py-2 px-3 text-sm font-bold text-center leading-normal text-white rounded-lg bg-gradient-to-tl from-zinc-800 to-zinc-700 sm:ml-auto shadow-md hover:scale-[1.02] transition-transform"
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
              {selectedTab === "Help Articles"
                ? "article"
                : selectedTab === "FAQs"
                ? "faqs"
                : "post"}
            </button>
          </Link>,
        ]}
      />

      <div className="dark:bg-gray-950 bg-white shadow-md rounded-2xl p-6">
        {children}
      </div>
    </>
  );
};

export default ContentManagement;
