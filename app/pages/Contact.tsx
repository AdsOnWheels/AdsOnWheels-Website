import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

import Form from "../components/Form";
import { contactSchema } from "../schemas/contactSchema";

interface Props {
  maxWidth?: string;
  margin?: string;
  padding?: string;
}

const ContactPage = ({ maxWidth, margin, padding }: Props) => {
  const [pending, setPending] = useState(false);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsConsentGiven(isChecked);

    // Update the consent field in the form data
    setFormData((prev) => ({
      ...prev,
      consent: isChecked,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = contactSchema.safeParse(formData);

      if (!validFormData.success) {
        console.error("Invalid rider information:", validFormData.error);
        toast.error("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to send contact data
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData),
      });

      // Check if contact data was successful
      if (!res.ok) {
        setPending(false);
        throw new Error("Sending message failed");
      }

      const user = await res.json();

      console.log(`Hey! ${user.name}. Form successfully submitted.`);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
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
        pending={pending}
        formData={formData}
        onSubmit={handleSubmit}
        handleFormData={handleFormData}
        isConsentGiven={isConsentGiven}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default ContactPage;
