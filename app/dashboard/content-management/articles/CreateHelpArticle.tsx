"use client";

import React, { useState } from "react";

import ContentCreator from "../../components/forms/ContentCreator";

const CreateHelpArticle = () => {
  const [content, setContent] = useState({ title: "", body: "" });

  const handleContentChange = (value: string) => {
    setContent((prevContent) => ({ ...prevContent, body: value }));
  };

  const handleSubmit = () => {
    // Handle submission of help article content
    console.log("Submitted help article:", content);
  };

  return (
    <ContentCreator
      pageTitle="Create New Help Article"
      titleLabel="Topic"
      bodyLabel="Content"
      content={content}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateHelpArticle;
