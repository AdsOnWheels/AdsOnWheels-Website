"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import DeleteContentButton from "../components/DeleteContentButton";
import EditContentButton from "../components/EditContentButton";
import LoadingFAQsPage from "./LoadingFAQsPage";
import { FAQFormData } from "@/types/types";

const FAQs = () => {
  const [filter, setFilter] = useState("All");

  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    data: faqs,
    error,
    isLoading,
  } = useQuery<FAQFormData[]>({
    queryKey: ["faqs"],
    queryFn: () =>
      fetch("/api/faqs")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => data)
        .catch((error) => {
          throw new Error(
            "There was a problem fetching data from the server",
            error
          );
        }),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

  const filterOptions = ["All", "Brand", "Rider"];

  const handleFilterClick = (value: string) => {
    setFilter(value);
    const params = new URLSearchParams(searchParams);
    params.set("tag", value);
    router.push("?" + params);
  };

  if (isLoading) return <LoadingFAQsPage />;
  if (error) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <Toaster />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold dark:text-white text-gray-800">
          Manage Frequently Asked Questions
        </h2>
      </div>
      {/* Description */}
      <p className="dark:text-slate-600 text-gray-600 mb-6">
        Easily manage and create new FAQs for brands or riders.
      </p>
      <div className="mb-6">
        {/* Map through filter options */}
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleFilterClick(option)}
            className={`mr-4 px-4 py-1 transition-transform duration-200 ease-in-out relative ${
              filter === option
                ? "text-blue-500 dark:text-white"
                : "text-gray-600 dark:text-white"
            } hover:text-blue-500 dark:hover:text-white`}
          >
            {option}
            {filter === option && (
              <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-blue-500 dark:bg-white rounded-full transition-transform duration-200 ease-in-out`}
              ></span>
            )}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through filtered FAQs */}
        {faqs
          ?.filter(
            (faq) => filter === "All" || faq.tag === filter.toLowerCase()
          )
          .map((faq) => (
            <div
              key={faq.id}
              className="dark:bg-slate-900 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <span className="inline-block align-middle dark:bg-blue-500/80 bg-blue-500 text-white text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-4">
                  {faq.tag.charAt(0).toUpperCase() + faq.tag.slice(1)}
                </span>
                <p className="dark:text-slate-600 text-gray-600">
                  {faq.answer}
                </p>
              </div>
              <div className="px-6 py-4 flex justify-end space-x-2">
                <EditContentButton href={`faqs/${faq.id}`} />
                <DeleteContentButton
                  name="FAQ"
                  apiEndpoint={`/api/faqs/${faq.id!}`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQs;
