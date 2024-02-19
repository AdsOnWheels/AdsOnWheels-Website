"use client";

import React, { useState } from "react";

import ContentCreator from "@/app/admin/components/forms/ContentCreator";

const CreateFAQ = () => {
  const [content, setContent] = useState({ title: "", body: "" });

  const handleContentChange = (value: string) => {
    setContent((prevContent) => ({ ...prevContent, body: value }));
  };

  const handleSubmit = () => {
    // Handle submission of faq content
    console.log("Submitted help faq:", content);
  };

  return (
    <ContentCreator
      pageTitle="Create New FAQ"
      titleLabel="Question"
      bodyLabel="Answer"
      content={content}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateFAQ;
