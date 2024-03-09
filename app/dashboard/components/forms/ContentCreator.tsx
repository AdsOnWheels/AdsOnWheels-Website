"use client";

import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { z } from "zod";

import { formats, modules } from "../../config/quillConfig";
import { sanitizeContent } from "@/utils/sanitizeContent";
import Spinner from "../Spinner";

interface Props {
  heading: string;
  inputName: string;
  editorName: string;
  tags?: boolean;
  schema: z.ZodType<any, any>;
  apiEndpoint: string;
}

// Dynamically import ReactQuill
const LazyReactQuill = dynamic(
  () => import("react-quill").then((mod) => mod.default),
  { ssr: false }
);

const ContentCreator = ({
  heading,
  inputName,
  editorName,
  tags,
  schema,
  apiEndpoint,
}: Props) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema!),
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [pending, setPending] = useState(false);

  // Handle tag selection
  const handleTagSelection = useCallback(
    (tag: string) => {
      // Toggle the selection of the clicked tag
      const newSelectedTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag) // Deselect the tag
        : [tag]; // Select the tag

      // Update the selected tags state
      setSelectedTags(newSelectedTags);

      // Update the form data with the selected tag
      setValue("tag", tag.toLowerCase() as "rider" | "brand");
    },
    [selectedTags, setValue]
  );

  // Handle form submission
  const onSubmit = handleSubmit(async (formData) => {
    try {
      setPending(true);

      // Sanitize the content value to remove HTML elements
      formData[editorName] = sanitizeContent(formData[editorName], editorName);

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Success! Your post has been published.");

        // Clear form
        reset();
      } else if (response.status === 409) {
        toast.error("Failed to submit form. Duplicate entry.");
      } else
        throw new Error(
          "An unexpected error occurred. Please try again later."
        );
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setPending(false);
    }
  });

  const capitalizedInputName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
        <form onSubmit={onSubmit}>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white pt-4 mb-4">
            {heading.charAt(0).toUpperCase() + heading.slice(1)}
          </h2>
          <Toaster />
          <div className="dark:bg-gray-950 bg-white shadow-lg overflow-hidden rounded-2xl">
            <div className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="mb-3 ml-1 text-sm font-bold dark:text-white/80 text-slate-700 dark:text-slate-700"
                >
                  {capitalizedInputName}
                </label>
                <input
                  id={inputName}
                  type="text"
                  aria-label={capitalizedInputName}
                  aria-describedby={`${inputName}-addon`}
                  className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                  {...register(inputName)}
                />
                {errors[inputName]?.message && (
                  <p className="bg-red-100 text-sm text-red-500 p-2 mt-2">
                    This field is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor={editorName}
                  className="mb-3 ml-1 text-sm font-bold dark:text-white/80 text-slate-700"
                >
                  {editorName.charAt(0).toUpperCase() + editorName.slice(1)}
                </label>
                <Controller
                  name={editorName}
                  control={control}
                  render={({ field }) => (
                    <LazyReactQuill
                      theme="snow"
                      modules={modules}
                      formats={formats}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      className="ql-container"
                    />
                  )}
                />
                {errors[editorName]?.message && (
                  <p className="bg-red-100 text-sm text-red-500 p-2 mt-2">
                    This field is required
                  </p>
                )}
              </div>
            </div>
            {tags && (
              <div className="w-full max-w-4xl px-6 mb-4 flex-0">
                <label
                  className="ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                  htmlFor="Tags"
                >
                  Tags
                </label>
                <div className="flex h-8 mt-2">
                  <button
                    type="button"
                    value="Rider"
                    onClick={() => handleTagSelection("rider")}
                    className={`${
                      selectedTags.includes("rider")
                        ? "bg-blue-500 dark:bg-blue-500/55 text-white"
                        : "bg-gray-200 dark:bg-gray-200/80 text-gray-700"
                    } mr-2 inline-block align-middle rounded-full px-6 py-1 text-xs font-semibold tracking-wide border border-gray-600 focus:outline-none focus:border-gray-700`}
                  >
                    Rider
                  </button>
                  <button
                    type="button"
                    value="Brand"
                    onClick={() => handleTagSelection("brand")}
                    className={`${
                      selectedTags.includes("brand")
                        ? "bg-blue-500 dark:bg-blue-500/55 text-white"
                        : "bg-gray-200 dark:bg-gray-200/80 text-gray-700"
                    } inline-block align-middle rounded-full px-6 py-1 text-xs font-semibold tracking-wide border border-gray-600 focus:outline-none focus:border-gray-700`}
                  >
                    Brand
                  </button>
                </div>
              </div>
            )}
            <div className="dark:bg-gray-950 bg-gray-100 px-6 py-4 flex justify-end">
              <button
                type="submit"
                className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25"
                disabled={pending ? true : false}
              >
                {pending ? (
                  <>
                    Posting <Spinner />
                  </>
                ) : (
                  "Post"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentCreator;
