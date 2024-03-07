import React, { ChangeEvent, FormEvent, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { RootState } from "@/redux/store";
import { setTag } from "@/redux/slices/contentForm";

interface Props {
  pageTitle: string;
  titleLabel: string;
  bodyLabel: string;
  tags?: boolean;
  pending: boolean;
  error: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (c: string) => void;
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
  tags,
  pending,
  error,
  handleInputChange,
  handleContentChange,
  handleSubmit,
}: Props) => {
  const { title, body } = useSelector((state: RootState) => state.contentForm);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleTagSelection = useCallback(
    (tag: string) => {
      // Toggle the selection of the clicked tag
      const newSelectedTags = selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag) // Deselect the tag
        : [tag]; // Select the tag

      // Update the selected tags state
      setSelectedTags(newSelectedTags);

      // Dispatch the selected tag to Redux
      dispatch(setTag(tag.toLowerCase() as "rider" | "brand"));
    },
    [selectedTags, setSelectedTags, dispatch]
  );

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white pt-4 mb-4">
            {pageTitle}
          </h2>
          <Toaster />
          {error && toast.error(error)}
          <div className="dark:bg-gray-950 bg-white shadow-lg overflow-hidden rounded-2xl">
            <div className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="mb-3 ml-1 text-sm font-bold dark:text-white/80 text-slate-700 dark:text-slate-700"
                >
                  {titleLabel}
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  aria-label="Title"
                  aria-describedby="title-addon"
                  value={title}
                  className="focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="mb-3 ml-1 text-sm font-bold dark:text-white/80 text-slate-700"
                >
                  {bodyLabel}
                </label>
                <LazyReactQuill
                  theme="snow"
                  value={body}
                  modules={modules}
                  formats={formats}
                  className="ql-container"
                  onChange={handleContentChange}
                />
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
                {pending ? "Posting" : "Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentCreator;
