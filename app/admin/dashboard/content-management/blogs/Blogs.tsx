import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import placeHolderImage from "../../../assets/images/dummy_600x400.png";

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
    <div className="bg-white rounded-lg p-6">
      {/* Header section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Manage Blog Posts
        </h2>
      </div>
      {/* Description */}
      <p className="text-gray-600 mb-6">
        Easily manage and create new blog posts to keep your audience engaged.
      </p>
      {/* Blog post list */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Individual blog post cards go here */}
        {/* Example blog post card */}
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={placeHolderImage}
              alt="Blog Post"
              width={100}
              height={100}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.content}</p>
              <div className="mt-4 flex justify-end space-x-2">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
