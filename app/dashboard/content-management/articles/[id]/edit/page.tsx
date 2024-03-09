"use client";

import React, { useEffect, useState } from "react";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { articleUpdateSchema } from "@/app/schemas/articleSchema";
import { ContentFormData } from "@/types/types";

interface Props {
  params: { id: string };
}

const EditArticle = ({ params }: Props) => {
  const articleId = params.id;

  const [article, setArticle] = useState<ContentFormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Perform the data fetching for a single item by its ID
        const res = await fetch(`/api/articles/${articleId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch Article");
        }
        const data = await res.json();
        setArticle(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!article) {
    return <div>Article not found</div>;
  }

  const heading = "Edit Article";
  const inputName = "title";
  const editorName = "content";
  const schema = articleUpdateSchema;
  const apiEndpoint = `/api/articles/${articleId}`;
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
      initialData={article}
    />
  );
};

export default EditArticle;
