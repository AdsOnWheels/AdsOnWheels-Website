"use client";

import React, { useState } from "react";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";

const CreatePost = () => {
  const [content, setContent] = useState({ title: "", body: "" });

  const handleContentChange = (value: string) => {
    setContent((prevContent) => ({ ...prevContent, body: value }));
  };

  const handleSubmit = () => {
    // Handle submission of blog post content
    console.log("Submitted help blog post:", content);
  };

  return (
    <ContentCreator
      pageTitle="Create New Blog Post"
      titleLabel="Title"
      bodyLabel="Content"
      content={content}
      handleContentChange={handleContentChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreatePost;
