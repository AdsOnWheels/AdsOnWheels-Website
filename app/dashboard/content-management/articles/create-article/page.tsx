"use client";

import React from "react";

import ContentCreator from "../../../components/forms/ContentCreator";
import { articleSchema } from "@/app/schemas/articleSchema";

const CreateHelpArticle = () => {
  const heading = "Create New Help Article";
  const inputName = "title";
  const editorName = "content";
  const schema = articleSchema;
  const apiEndpoint = "/api/articles";
  const method = "POST";

  return (
    <ContentCreator
      heading={heading}
      inputName={inputName}
      editorName={editorName}
      schema={schema}
      apiEndpoint={apiEndpoint}
      method={method}
    />
  );
};

export default CreateHelpArticle;
