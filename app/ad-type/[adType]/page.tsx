import React from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/app/layout/header/Header";
import Footer2 from "@/app/layout/footer/Footer2";
import CargoBikeAd from "../CargoBikeAd";
import BasketBikeAd from "../BasketBikeAd";
import FrameBikeAd from "../FrameBikeAd";
import InFrameBikeAd from "../InFrameBikeAd";
import WheelRimCoverBikeAd from "../WheelRimCoverBikeAd";
import NotFoundIllustration from "../../../public/Illustration-404-not-found.png";

const Page = ({ params }: any) => {
  const adType = params.adType;

  // Function to render content based on adType
  const renderContent = () => {
    switch (adType) {
      case "cargo-bike-ads":
        return <CargoBikeAd />;
      case "basket-ads":
        return <BasketBikeAd />;
      case "frame-ads":
        return <FrameBikeAd />;
      case "wheel-rim-ads":
        return <WheelRimCoverBikeAd />;
      case "in-frame-ads":
        return <InFrameBikeAd />;
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
