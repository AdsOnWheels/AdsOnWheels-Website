import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const HelpArticles = () => {
  const helpArticles = [
    {
      id: 1,
      title: "How to get started with our service",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Understanding billing and payments",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Troubleshooting common issues",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Manage Help Articles
        </h2>
      </div>
      {/* Description */}
      <p className="text-gray-600 mb-6">
        Easily manage and create new help articles to keep your audience
        engaged.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through Help Articles */}
        {helpArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600">{article.content}</p>
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

export default HelpArticles;
