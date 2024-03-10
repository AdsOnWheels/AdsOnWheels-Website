"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { blogUpdateSchema } from "@/app/schemas/blogSchema";
import { ContentFormData } from "@/types/types";

interface Props {
  params: { id: string };
}

const EditBlog = ({ params }: Props) => {
  const blogId = params.id;

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery<ContentFormData, Error>({
    queryKey: ["blogs", blogId],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/blogs/${blogId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch Blog");
        }
        return res.json();
      } catch (error: any) {
        throw new Error(`Error fetching Blog: ${error.message}`);
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const heading = "Edit Blog";
  const inputName = "title";
  const editorName = "content";
  const schema = blogUpdateSchema;
  const apiEndpoint = `/api/blogs/${blogId}`;
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
      initialData={blog}
    />
  );
};

export default EditBlog;
