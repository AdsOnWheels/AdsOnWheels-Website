"use client";

import React from "react";

import ContentCreator from "../../components/forms/ContentCreator";
import { blogSchema } from "@/app/schemas/blogSchema";

const CreatePost = () => {
  const heading = "Create New Blog Post";
  const inputName = "title";
  const editorName = "content";
  const schema = blogSchema;
  const apiEndpoint = "/api/blogs";

  return (
    <ContentCreator
      heading={heading}
      inputName={inputName}
      editorName={editorName}
      schema={schema}
      apiEndpoint={apiEndpoint}
    />
  );
};

export default CreatePost;
