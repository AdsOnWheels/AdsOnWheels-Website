"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

import { articleSchema } from "@/app/schemas/articleSchema";
import ContentCreator from "../../components/forms/ContentCreator";

const CreateHelpArticle = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [content, setContent] = useState({ title: "", body: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // It's a ChangeEvent<HTMLInputElement>
    const { name, value } = e.target;
    setContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  const handleContentChange = (content: string) => {
    // Remove HTML tags from the content
    const sanitizedContent = content.replace(/<[^>]*>?/gm, "");
    setContent((prevContent) => ({
      ...prevContent,
      body: sanitizedContent, // Property for ReactQuill content
    }));
  };

  // Handle submission of faq content
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!content.title || !content.body) {
      toast.error("Please provide all the required information.");
      return;
    }

    try {
      // Validate form data using Zod schema
      const validFormData = articleSchema.safeParse(content);

      if (!validFormData.success) {
        console.error("Invalid rider information:", validFormData.error);
        toast.error("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      setPending(true);
      // Make a request to create faq
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFormData),
      });

      // Check if faq creation was successful
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
    <ContentCreator
      pageTitle="Create New Help Article"
      titleLabel="Topic"
      bodyLabel="Content"
      pending={pending}
      error={error}
      handleInputChange={handleInputChange}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateHelpArticle;
