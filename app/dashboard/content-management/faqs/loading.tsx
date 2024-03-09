import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingFAQsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <div className="mb-6 animate-pulse">
        <Skeleton height={30} width={383} />
      </div>
      {/* Description */}
      <div className="mb-6 animate-pulse">
        <Skeleton height={20} width={380} />
      </div>
      <div className="flex mb-6">
        {/* Map through filter options */}
        {[1, 2, 3].map((index) => (
          <div key={index} className="mr-5 animate-pulse">
            <Skeleton width={50} height={25} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="dark:bg-slate-900 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between animate-pulse"
          >
            <div className="p-6">
              <div className="mb-2">
                <Skeleton height={30} />
              </div>
              <div className="mb-4">
                <Skeleton width={55} height={25} />
              </div>
              <Skeleton height={134} />
            </div>
            <div className="px-6 py-4 flex justify-end space-x-2">
              <Skeleton width={48} height={25} />
              <Skeleton width={60} height={25} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingFAQsPage;
