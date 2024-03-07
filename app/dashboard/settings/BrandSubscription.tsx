"use client";

import React, { useEffect, useState } from "react";

const brands = [
  {
    id: 1,
    name: "Brand A",
    subscriptionStatus: "Subscribed",
    subscriptionPlan: "Premium",
    subscriptionStartDate: "2023-01-01",
    subscriptionEndDate: "2023-12-31",
  },
  {
    id: 2,
    name: "Brand B",
    subscriptionStatus: "Not Subscribed",
    subscriptionPlan: "Basic",
    subscriptionStartDate: "",
    subscriptionEndDate: "",
  },
  // Add more brands as needed
];

const BrandSubscription = () => {
  //   const [brands, setBrands] = useState([]);

  //   useEffect(() => {
  //     // Fetch subscribed brands
  //     fetchSubscribedBrands();
  //   }, []);

  //   const fetchSubscribedBrands = async () => {
  //     try {
  //       // Fetch subscribed brands from your backend
  //       const response = await fetch("/api/subscribed-brands");
  //       if (response.ok) {
  //         const data = await response.json();
  //         setBrands(data.brands);
  //       } else {
  //         throw new Error("Failed to fetch subscribed brands");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="w-full md:w-1/2 px-3 mb-6">
      {/* Subscribed Brands Section */}
      <div className="bg-white dark:bg-gray-950 dark:shadow-xl rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Subscribed Brands</h2>
        <div className="overflow-auto max-h-72">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Brand Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Subscription Plan
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Subscription Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  End Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {brands.map((brand) => (
                <tr key={brand.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{brand.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {brand.subscriptionPlan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {brand.subscriptionStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {brand.subscriptionStartDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {brand.subscriptionEndDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrandSubscription;
