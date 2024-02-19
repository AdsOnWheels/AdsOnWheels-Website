"use client";

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  pageTitle: string;
  titleLabel: string;
  bodyLabel: string;
  content: { title: string; body: string };
  handleContentChange: (value: string) => void;
  handleSubmit: () => void;
}

const ContentCreator = ({
  pageTitle,
  titleLabel,
  bodyLabel,
  content,
  handleContentChange,
  handleSubmit,
}: Props) => {
  const { title, body } = content;

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
        <h2 className="text-xl font-bold text-gray-800 pt-4 mb-4">
          {pageTitle}
        </h2>
        <div className="bg-white shadow-lg overflow-hidden rounded-2xl">
          <div className="p-6">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-3 ml-1 text-sm font-bold text-slate-700"
              >
                {titleLabel}
              </label>
              <input
                type="text"
                id="title"
                value={title}
                className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                onChange={(e) => handleContentChange(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="mb-3 ml-1 text-sm font-bold text-slate-700"
              >
                {bodyLabel}
              </label>
              <ReactQuill
                theme="snow"
                value={body}
                className="ql-container"
                onChange={handleContentChange}
              />
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-end">
            <button
              onClick={handleSubmit}
              className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-zinc-800 to-zinc-700 leading-pro tracking-tight-rem bg-150 bg-x-25"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;
