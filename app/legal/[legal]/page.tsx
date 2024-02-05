import React from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/app/layout/header/Header";
import Footer2 from "@/app/layout/footer/Footer2";
import TermsOfUse from "../TermsOfUse";
import PrivacyPolicy from "../PrivacyPolicy";
import CookiePolicy from "../CookiePolicy";
import NotFoundIllustration from "../../../public/Illustration-404-not-found.png";
import Legal from "../page";

const Page = ({ params }: any) => {
  const legal = params.legal;

  // Function to render content based on adType
  const renderContent = () => {
    switch (legal) {
      case "legal":
        return <Legal />;
      case "terms-of-use":
        return <TermsOfUse />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "cookie-policy":
        return <CookiePolicy />;
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
              <Link href="/">
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
    <div className="flex flex-col min-h-screen">
      <Header />
      {renderContent()}
      <Footer2 />
    </div>
  );
};

export default Page;
