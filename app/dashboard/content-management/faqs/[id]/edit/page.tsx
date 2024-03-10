"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { faqUpdateSchema } from "@/app/schemas/faqSchema";
import { FAQFormData } from "@/types/types";

interface Props {
  params: { id: string };
}

const EditFAQ = ({ params }: Props) => {
  const faqId = params.id;

  const {
    data: faq,
    isLoading,
    error,
  } = useQuery<FAQFormData, Error>({
    queryKey: ["faqs", faqId],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/faqs/${faqId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch FAQ");
        }
        return res.json();
      } catch (error: any) {
        throw new Error(`Error fetching FAQ: ${error.message}`);
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!faq) return <div>Faq not found</div>;

  const heading = "Edit FAQ";
  const inputName = "question";
  const editorName = "answer";
  const schema = faqUpdateSchema;
  const apiEndpoint = `/api/faqs/${faqId}`;
  const method = "PUT";

  return (
    <ContentCreator
      heading={heading}
      inputName={inputName}
      editorName={editorName}
      tags={true}
      schema={schema}
      apiEndpoint={apiEndpoint}
      method={method}
      initialData={faq}
    />
  );
};

export default EditFAQ;
