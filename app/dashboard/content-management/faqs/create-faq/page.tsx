"use client";

import React from "react";

import ContentCreator from "../../../components/forms/ContentCreator";
import { faqSchema } from "@/app/schemas/faqSchema";

const CreateFAQ = () => {
  const heading = "Create New FAQ";
  const inputName = "question";
  const editorName = "answer";
  const schema = faqSchema;
  const apiEndpoint = "/api/faqs";
  const method = "POST";

  return (
    <ContentCreator
      heading={heading}
      inputName={inputName}
      editorName={editorName}
      tags={true}
      schema={schema}
      apiEndpoint={apiEndpoint}
      method={method}
    />
  );
};

export default CreateFAQ;
