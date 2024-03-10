import React from "react";
import Image from "next/image";

import placeHolderImage from "../../assets/images/dummy_600x400.png";
import EditContentButton from "../components/EditContentButton";
import DeleteContentButton from "../components/DeleteContentButton";

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
                <EditContentButton href={`blogs/${post.id}`} />
                <DeleteContentButton
                  name="Blog"
                  apiEndpoint={`/api/blogs/${post.id!}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
