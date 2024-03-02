"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import DOMPurify from "dompurify";

import { faqSchema } from "@/app/schemas/faqSchema";
import useRequestHandler from "@/app/hooks/useRequestHandler";
import ContentCreator from "../../components/forms/ContentCreator";

const CreateFAQ = () => {
  const [content, setContent] = useState({ title: "", body: "" });
  const { pending, error, requestHandler } = useRequestHandler();

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
    const sanitizedContent = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [], // remove all HTML tags
    });

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
      const validFormData = faqSchema.safeParse(content);

      if (!validFormData.success) {
        console.error("Invalid rider information:", validFormData.error);
        toast.error("Please provide valid information");
        return null;
      }

      const validatedFormData = validFormData.data;

      // Make a request to create faq
      await requestHandler(validatedFormData, "/api/faqs");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <ContentCreator
      pageTitle="Create New FAQ"
      titleLabel="Question"
      bodyLabel="Answer"
      content={content}
      pending={pending}
      error={error}
      handleInputChange={handleInputChange}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateFAQ;
