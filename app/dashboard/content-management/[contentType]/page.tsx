import React from "react";
import Link from "next/link";
import Image from "next/image";

import CreateFAQ from "../faqs/CreateFAQ";
import CreatePost from "../blogs/CreatePost";
import CreateHelpArticle from "../articles/CreateHelpArticle";
import NotFoundIllustration from "../../../assets/images/Illustration-404-not-found.png";

const Page = ({ params }: any) => {
  const contentType = params.contentType;

  // Function to render content based on adType
  const renderContent = () => {
    switch (contentType) {
      case "create-post":
        return <CreatePost />;
      case "create-faq":
        return <CreateFAQ />;
      case "create-article":
        return <CreateHelpArticle />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
            <div className="max-w-lg text-center">
              <Image
                src={NotFoundIllustration}
                alt="Page Not Found"
                className="mx-auto h-72 w-auto opacity-80"
              />
              <h1 className="text-7xl font-extrabold text-indigo-800 mt-8">
                404
              </h1>
              <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
              <p className="text-md text-gray-500 mt-2">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
              <Link href="/dashboard">
                <button className="mt-8 inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow hover:bg-indigo-700 transition duration-300 ease-in-out">
                  Return to Homepage
                </button>
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 flex-0">{renderContent()}</div>
    </div>
  );
};

export default Page;
