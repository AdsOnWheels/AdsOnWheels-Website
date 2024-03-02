"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

import Form from "../components/Form";
import { riderSchema } from "../schemas/riderSchema";

const WaitingList = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    cityRegion: "",
    postCode: "",
    bicycleType: "",
    cyclingDistance: "",
    bicycleCondition: "",
    imageUrl: "",
    regularRoutes: "",
    availability: "",
    interestReason: "",
    additionalComments: "",
  });

  const handleFormData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Your logic to handle form data changes
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.cityRegion ||
      !formData.postCode ||
      formData.bicycleType ||
      formData.cyclingDistance ||
      formData.bicycleCondition ||
      formData.imageUrl ||
      !formData.regularRoutes ||
      formData.availability ||
      !formData.interestReason
    ) {
      setError("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = riderSchema.safeParse(formData);

      if (!validFormData.success) {
        console.error("Invalid rider information:", validFormData.error);
        setError("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to sign up the user
      const res = await fetch("/api/riders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData),
      });

      // Check if signup was successful
      if (!res.ok) {
        setPending(false);
        throw new Error("Failed to create rider user");
      }

      const user = await res.json();

      console.log(`Hey! ${user.name}. Form successfully submitted.`);
    } catch (error) {
      console.error("Error creating rider user:", error);
      setError("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  return (
    <section
      id="waiting-list"
      className="bg-gradient-to-b from-gray-50 to-gray-700 flex items-center justify-center p-12"
    >
      <div className="relative max-w-5xl mx-auto bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Get Early Access to OutFront
          </h1>
          <p className="text-lg text-gray-600">
            Join our waiting list and be the first to experience the future of
            mobile advertising with OutFront.
          </p>
          <p className="text-sm mt-4 text-gray-700">
            Be among the first to revolutionize your ride!
          </p>
        </div>

        <Form
          formType="waitingList"
          formData={formData}
          onSubmit={handleSubmit}
          handleFormData={handleFormData}
        />
      </div>
    </section>
  );
};

export default WaitingList;
