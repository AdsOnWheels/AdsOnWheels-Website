import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const FAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I create a new account?",
      category: "For Brands",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      category: "For Riders",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      question: "How do I update my profile information?",
      category: "For Brands",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Manage Frequently Asked Questions
        </h2>
      </div>
      {/* Description */}
      <p className="text-gray-600 mb-6">
        Easily manage and create new FAQs for brands or riders.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through FAQs */}
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase mb-4">
                {faq.category}
              </span>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
            <div className="px-6 py-4 flex justify-end space-x-2">
              <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
                <FontAwesomeIcon icon={faEdit} className="mr-1" />
                Edit
              </button>
              <button className="text-sm font-semibold text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:ring-red-400">
                <FontAwesomeIcon icon={faTrash} className="mr-1" />
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
