"use client";

import React, { ChangeEvent, useState } from "react";

import BasicTable from "../layout/tables/basic-table/BasicTable";
import ActionPanel from "../layout/ActionPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Sample data for contact form inquiries
const contactFormInquiries = [
  [
    "John Doe",
    "john@example.com",
    "Website Feedback",
    "This is a test message...",
    "2024-02-18",
  ],
  [
    "Jane Smith",
    "jane@example.com",
    "General Inquiry",
    "Lorem ipsum dolor sit amet...",
    "2024-02-19",
  ],
  [
    "Alice Johnson",
    "alice@example.com",
    "Product Support",
    "Nulla vitae elit libero...",
    "2024-02-20",
  ],
  [
    "Bob Williams",
    "bob@example.com",
    "Technical Issue",
    "Vivamus sagittis lacus vel augue...",
    "2024-02-21",
  ],
  [
    "Emily Davis",
    "emily@example.com",
    "Billing Question",
    "Cras mattis consectetur purus...",
    "2024-02-22",
  ],
  [
    "Michael Brown",
    "michael@example.com",
    "Feature Request",
    "Praesent commodo cursus magna...",
    "2024-02-23",
  ],
];

// Define headers for the table
const tableHeaders = [
  "Name",
  "Email",
  "Subject",
  "Message",
  "Date",
  "", // For the button column
];
const Forms = () => {
  const [inquiries, setInquiries] = useState<string[][]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inquiriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Pagination logic
  const indexOfLastInquiry = currentPage * inquiriesPerPage;
  const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
  const currentInquiries = inquiries.slice(
    indexOfFirstInquiry,
    indexOfLastInquiry
  );

  const pageCount = Math.ceil(inquiries.length / inquiriesPerPage);

  const pageIndex = Math.floor(indexOfLastInquiry / inquiriesPerPage);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  // Fetch inquiries (replace with actual API call)
  const fetchInquiries = () => {
    // Make API call to fetch inquiries data
    // Update inquiries state with fetched data
    setInquiries(contactFormInquiries);
  };

  // Export inquiries to CSV
  const exportToCSV = () => {
    // Convert inquiries data to CSV format and initiate download
    const csvData =
      "Name,Email,Subject,Message,Date\n" +
      contactFormInquiries.map((row) => row.join(",")).join("\n");
    const csvFile = new Blob([csvData], { type: "text/csv" });
    const csvURL = window.URL.createObjectURL(csvFile);
    const tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", "inquiries.csv");
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  // Function to handle opening ZohoMail in a new tab
  const openZohoMail = () => {
    window.open("https://accounts.zoho.eu/signin", "_blank");
  };

  return (
    <>
      {/* Section for setting up new campaigns and searching campaigns */}
      <ActionPanel
        searchBar={
          <form className="lg:pr-3" action="#" method="GET">
            <label htmlFor="inquiries-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1 lg:w-64 xl:w-96">
              <input
                id="search-inquiries"
                type="text"
                name="inquiries"
                value={searchQuery}
                onChange={handleQueryChange}
                placeholder="Search inquiries..."
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
              />
            </div>
          </form>
        }
        buttons={[
          <button
            key="zohoMail"
            type="button"
            data-modal-toggle="open-zohoMail"
            className="inline-flex items-center py-2.5 px-4 text-sm font-bold text-center leading-normal text-white rounded-lg dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 sm:ml-auto shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            onClick={openZohoMail}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 -ml-1 w-4 h-4" />
            Open ZohoMail
          </button>,
          <div key="export" className="relative inline-block">
            <button
              type="button"
              className="inline-flex justify-center items-center py-2 px-3 w-1/2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:scale-[1.02] transition-transform sm:w-auto"
              onClick={exportToCSV}
            >
              <svg
                className="mr-2 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Export
            </button>
          </div>,
        ]}
      />
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Contact Form Inquiries
        </h2>
        <div className="overflow-x-auto">
          <BasicTable
            headers={tableHeaders}
            rows={contactFormInquiries}
            searchQuery={searchQuery}
            button={true}
          />
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                  pageIndex === index ? "bg-blue-600" : ""
                }`}
                onClick={() => paginate(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
