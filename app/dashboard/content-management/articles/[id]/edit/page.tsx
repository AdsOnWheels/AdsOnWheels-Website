"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { articleUpdateSchema } from "@/app/schemas/articleSchema";
import { ContentFormData } from "@/types/types";

interface Props {
  params: { id: string };
}

const EditArticle = ({ params }: Props) => {
  const articleId = params.id;

  const {
    data: article,
    isLoading,
    error,
  } = useQuery<ContentFormData, Error>({
    queryKey: ["articles", articleId],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/articles/${articleId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch Article");
        }
        return res.json();
      } catch (error: any) {
        throw new Error(`Error fetching Article: ${error.message}`);
      }
    },
  });

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
