import React from "react";

import Form from "../components/Form";
import { FormData } from "@/types/types";

interface Props {
  maxWidth?: string;
  margin?: string;
  padding?: string;
}

const ContactPage = ({ maxWidth, margin, padding }: Props) => {
  const handleFormSubmit = (formData: FormData) => {
    // Handle the form data submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`bg-white container ${maxWidth} ${margin} ${padding} mx-auto rounded-3xl`}
    >
      {/* Contact Form */}
      <Form
        formType="contact"
        maxWidth="min-w-4xl"
        padding="p-6"
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default ContactPage;
