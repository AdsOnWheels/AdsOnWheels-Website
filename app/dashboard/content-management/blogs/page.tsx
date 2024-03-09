import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import placeHolderImage from "../../assets/images/dummy_600x400.png";
import ContentManagement from "../page";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Title of the Blog Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Title of the Blog Post 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Title of the Blog Post 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <ContentManagement>
      <div className="container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold dark:text-white text-gray-800">
            Manage Blog Posts
          </h2>
        </div>
        {/* Description */}
        <p className="dark:text-slate-600 text-gray-600 mb-6">
          Easily manage and create new blog posts to keep your audience engaged.
        </p>
        {/* Blog post list */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Individual blog post cards go here */}
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="dark:bg-slate-900 bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <Image
                src={placeHolderImage}
                alt="Blog Post"
                width={100}
                height={100}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm dark:text-slate-600 text-gray-600">
                  {post.content}
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="w-3.5 h-3.5 mr-1"
                    />
                    Edit
                  </button>
                  <button className="text-sm font-semibold text-red-500 hover:text-red-600 dark:text-red-300 dark:hover:text-red-200">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="w-3 h-3.5 mr-1"
                    />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentManagement>
  );
};

export default Blogs;
