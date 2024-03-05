import React, { ChangeEvent, FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface Props {
  pageTitle: string;
  titleLabel: string;
  bodyLabel: string;
  pending: boolean;
  error: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (value: string) => void;
  handleSubmit: (e: FormEvent) => Promise<null | undefined>;
}

// Dynamically import ReactQuill
const LazyReactQuill = dynamic(
  () => import("react-quill").then((mod) => mod.default),
  { ssr: false }
);

const ContentCreator = ({
  pageTitle,
  titleLabel,
  bodyLabel,
  pending,
  error,
  handleInputChange,
  handleContentChange,
  handleSubmit,
}: Props) => {
  const { answer, question } = useSelector((state: RootState) => state.faqForm);
  const { title, body } = useSelector((state: RootState) => state.contentForm);

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-800 pt-4 mb-4">
          {pageTitle}
        </h2>
        <Toaster />
        {error && toast.error(error)}
        <div className="bg-white shadow-lg overflow-hidden rounded-2xl">
          <div className="p-6">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-3 ml-1 text-sm font-bold text-slate-700 dark:text-slate-700"
              >
                {titleLabel}
              </label>
              <input
                id="title"
                type="text"
                name="title"
                aria-label="Title"
                aria-describedby="title-addon"
                value={title || question}
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="mb-3 ml-1 text-sm font-bold text-slate-700"
              >
                {bodyLabel}
              </label>
              <LazyReactQuill
                theme="snow"
                value={body || answer}
                className="ql-container"
                onChange={handleContentChange}
              />
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-end">
            <button
              onClick={handleSubmit}
              className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25"
              disabled={pending ? true : false}
            >
              {pending ? "Posting" : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;
