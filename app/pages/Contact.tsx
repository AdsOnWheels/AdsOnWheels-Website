import React from "react";

import Form from "../components/Form";
import { FormData } from "@/types/types";

const ContactPage = () => {
  const handleFormSubmit = (formData: FormData) => {
    // Handle the form data submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white container max-w-3xl mt-16 mx-auto p-8 rounded-3xl">
      {/* Contact Form */}
      <Form formType="contact" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;
