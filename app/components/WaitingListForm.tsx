"use client";

import React from "react";
import Input from "./Input";
import Button from "./Button";

const WaitingListForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Submits Google Forms data
    fetch("YOUR_GOOGLE_FORM_ACTION_URL", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // Display error message to the user
        console.log("Form Submitted!");
      });
  };

  return (
    <div className="mt-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="entry.email"
          placeHolder="Enter your email"
          className="w-full px-5 py-3 bg-opacity-80 bg-white border border-gray-400 rounded-full focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
          required
        />
        <Button
          type="submit"
          text="Join Waiting List"
          color="dutch"
          className="w-full"
        />
      </form>
    </div>
  );
};

export default WaitingListForm;
