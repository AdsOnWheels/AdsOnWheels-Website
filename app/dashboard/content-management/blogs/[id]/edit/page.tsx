"use client";

import React, { useEffect, useState } from "react";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { blogUpdateSchema } from "@/app/schemas/blogSchema";
import { ContentFormData } from "@/types/types";

interface Props {
  params: { id: string };
}

const EditBlog = ({ params }: Props) => {
  const blogId = params.id;

  const [blog, setBlog] = useState<ContentFormData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Perform the data fetching for a single item by its ID
        const res = await fetch(`/api/blogs/${blogId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch Blog");
        }
        const data = await res.json();
        setBlog(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

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
