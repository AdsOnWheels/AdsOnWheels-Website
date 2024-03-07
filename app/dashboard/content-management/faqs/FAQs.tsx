import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const FAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I create a new account?",
      category: "Brand",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      category: "Rider",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "How do I update my profile information?",
      category: "Brand",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold dark:text-white text-gray-800">
          Manage Frequently Asked Questions
        </h2>
      </div>
      {/* Description */}
      <p className="dark:text-slate-600 text-gray-600 mb-6">
        Easily manage and create new FAQs for brands or riders.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through FAQs */}
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="dark:bg-slate-900 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                {faq.question}
              </h3>
              <span className="inline-block align-middle dark:bg-blue-500/80 bg-blue-500 text-white text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-4">
                {faq.category}
              </span>
              <p className="dark:text-slate-600 text-gray-600">{faq.answer}</p>
            </div>
            <div className="px-6 py-4 flex justify-end space-x-2">
              <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-400 dark:text-blue-300 dark:hover:text-blue-200">
                <FontAwesomeIcon icon={faEdit} className="w-3.5 h-3.5 mr-1" />
                Edit
              </button>
              <button className="text-sm font-semibold text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-400 dark:text-red-300 dark:hover:text-red-200">
                <FontAwesomeIcon icon={faTrash} className="w-3 h-3.5 mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
