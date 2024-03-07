"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import sanitizeHtml from "sanitize-html";
import { Toaster, toast } from "react-hot-toast";

import { RootState } from "@/redux/store";
import { faqSchema } from "@/app/schemas/faqSchema";
import { setTitle, setBody } from "@/redux/slices/contentForm";
import useRequestHandler from "@/app/hooks/useRequestHandler";
import ContentCreator from "../../components/forms/ContentCreator";

const CreateFAQ = () => {
  const { title, body, tag } = useSelector(
    (state: RootState) => state.contentForm
  );
  const { pending, error, requestHandler } = useRequestHandler();
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      dispatch(setTitle(value));
    }
  };

  const handleContentChange = (body: string) => {
    dispatch(setBody(body));
  };

  // Handle submission of faq content
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Sanitize the title value before sending it to the database
    const sanitizedAnswer = sanitizeHtml(body, {
      allowedTags: [],
      allowedAttributes: {},
    });

    // Validate form data
    if (!title || !body || !tag) {
      toast.error("Please provide all the required information.");
      return;
    }

    const question = title;
    const answer = sanitizedAnswer;

    const formData = { question, answer, tag };

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
      toast.success("Submitted!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <Toaster />
      <ContentCreator
        pageTitle="Create New FAQ"
        titleLabel="Question"
        bodyLabel="Answer"
        tags={true}
        pending={pending}
        error={error}
        handleInputChange={handleInputChange}
        handleContentChange={handleContentChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateFAQ;
