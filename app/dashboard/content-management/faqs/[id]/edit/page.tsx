"use client";

import React, { useEffect, useState } from "react";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { faqUpdateSchema } from "@/app/schemas/faqSchema";
import { FAQFormData } from "@/types/types";

interface Props {
  params: { id: string };
}

const EditFAQ = ({ params }: Props) => {
  const faqId = params.id;

  const [faq, setFaq] = useState<FAQFormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        // Perform the data fetching for a single item by its ID
        const response = await fetch(`/api/faqs/${faqId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ");
        }
        const data = await response.json();
        setFaq(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaq();
  }, [faqId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!faq) {
    return <div>Faq not found</div>;
  }

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