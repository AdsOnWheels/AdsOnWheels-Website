import React from "react";

import WaitingListForm from "../components/WaitingListForm";
import Form from "../components/Form";
import { FormData } from "@/types/types";

const WaitingList = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="join-now"
      className="bg-gradient-to-b from-gray-50 to-gray-700 flex items-center justify-center p-12"
    >
      <div className="relative max-w-5xl mx-auto bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Get Early Access to AdsOnWheels
          </h1>
          <p className="text-lg text-gray-600">
            Join our waiting list and be the first to experience the future of
            mobile advertising with AdsOnWheels.
          </p>
          <p className="text-sm mt-4 text-gray-700">
            Be among the first to revolutionize your ride!
          </p>
        </div>

        <Form formType="waitingList" onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
};

export default WaitingList;
