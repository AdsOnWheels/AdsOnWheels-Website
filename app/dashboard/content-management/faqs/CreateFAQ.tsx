"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import DOMPurify from "dompurify";

import { RootState } from "@/redux/store";
import { faqSchema } from "@/app/schemas/faqSchema";
import useRequestHandler from "@/app/hooks/useRequestHandler";
import ContentCreator from "../../components/forms/ContentCreator";
import { setAnswer, setQuestion } from "@/redux/slices/faqForm";

const CreateFAQ = () => {
  const { answer, question } = useSelector((state: RootState) => state.faqForm);
  const { pending, error, requestHandler } = useRequestHandler();
  const dispatch = useDispatch();

  const handleContentChange = (content: string) => {
    const sanitizedContent = DOMPurify.sanitize(content, { ALLOWED_TAGS: [] });
    dispatch(setAnswer(sanitizedContent));
  };

  // Handle submission of faq content
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!question || !answer) {
      toast.error("Please provide all the required information.");
      return;
    }

    const formData = { question, answer };

    try {
      // Validate form data using Zod schema
      const validFormData = faqSchema.safeParse(formData);

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
      pending={pending}
      error={error}
      handleInputChange={(e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "title") {
          dispatch(setQuestion(value));
        } else if (name === "body") {
          dispatch(setAnswer(value));
        }
      }}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateFAQ;
