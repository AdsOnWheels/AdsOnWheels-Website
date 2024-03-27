import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchFormData {
  search: string;
}

interface Props {
  defaultValue: string | null;
}

const SearchForm = ({ defaultValue }: Props) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchFormData>({
    defaultValues: { search: defaultValue || "" },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = handleSubmit(async (data) => {
    if (data.search.trim() !== "") {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(data.search)}`
      ); // Call fetchSearchResults with the search query
      if (res.ok) {
        const data = await res.json();
        // Handle the search results
        setSearchResults(data);
        console.log("Search results:", data);

        // Clear form
        reset();

        // Show modal when search results are available
        setShowModal(true);
      } else {
        console.error("Failed to fetch search results:", res.statusText);
      }
      const params = new URLSearchParams(searchParams);
      params.set("q", encodeURIComponent(data.search));
      router.push("?" + params);
    } else {
      router.push("/dashboard");
    }
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setShowModal(true);
      } else if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger button for search modal */}
      <div className="flex items-center">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faSearch}
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-full leading-5 dark:bg-[#141728] bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onClick={() => setShowModal(true)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 text-gray-400 flex items-center pointer-events-none">
              <p>Ctrl K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search modal */}
      {showModal && (
        <div
          id="search"
          role="dialog"
          className={`fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear outline-0 z-[1020] ps ${
            showModal ? "block" : "hidden opacity-0"
          }`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div
            className={`relative w-auto my-36 pointer-events-none sm:max-w-[560px] sm:mx-auto transition-transform duration-300 ease-in-out ${
              showModal ? "transform-none" : "-translate-y-13"
            }`}
          >
            <div className="relative flex flex-col w-full bg-white border border-solid pointer-events-auto bg-clip-padding border-black/20 rounded-xl outline-0">
              <div className="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl ">
                <h5 className="mb-0">Search Dashboard</h5>
                <button
                  type="button"
                  className="flex items-center box-content w-4 h-4 text-slate-700 bg-transparent border-0 rounded-1.5 opacity-50 cursor-pointer p-2 -m-2 ml-auto"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <form onSubmit={onSubmit}>
                <div className="relative flex-auto p-4">
                  <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                    <div className="max-w-xl w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-gray-600 focus-within:text-gray-400">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          type="search"
                          placeholder="Search..."
                          {...register("search")}
                          onKeyDown={handleKeyPress}
                          className="block flex-auto sm:text-sm w-full min-w-0 h-12 pl-10 pr-3 py-2 -ml-px border border-solid border-gray-300 rounded-full leading-5 dark:bg-[#141728] bg-white dark:placeholder:text-white/80 dark:text-white/80 placeholder-gray-500 transition-all focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:transition-shadow bg-clip-padding"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* Search result */}
              <div className="bg-gray-100/80 py-4">
                {searchResults.length > 0 ? (
                  <div>
                    {searchResults.map((result, index) => (
                      <div key={index}>
                        {/* Render only the line containing the search term */}
                        <div className="truncate text-sm text-gray-700 dark:text-gray-300">
                          {/* Render username if exists */}
                          {result.username && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="font-semibold text-indigo-600">
                                {result.username}
                              </span>
                            </div>
                          )}
                          {/* Render firstname if exists */}
                          {result.firstname && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="font-semibold text-indigo-600">
                                {result.firstname}
                              </span>
                            </div>
                          )}
                          {/* Render lastname if exists */}
                          {result.lastname && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="font-semibold text-indigo-600">
                                {result.lastname}
                              </span>
                            </div>
                          )}
                          {/* Render title if exists */}
                          {result.title && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="font-semibold text-indigo-600">
                                {result.title}
                              </span>
                            </div>
                          )}
                          {/* Render content if exists */}
                          {result.content && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.content}
                              </span>
                            </div>
                          )}
                          {/* Render question if exists */}
                          {result.question && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.question}
                              </span>
                            </div>
                          )}
                          {/* Render answer if exists */}
                          {result.answer && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.answer}
                              </span>
                            </div>
                          )}
                          {/* Render company if exists */}
                          {result.company && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.company}
                              </span>
                            </div>
                          )}
                          {/* Render industry if exists */}
                          {result.industry && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.industry}
                              </span>
                            </div>
                          )}
                          {/* Render adType if exists */}
                          {result.adType && (
                            <div className="px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-200/80">
                              <span className="text-gray-600 dark:text-gray-400">
                                {result.adType}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center">
                    {/* Display appropriate message based on search query */}
                    {defaultValue && (
                      <p className="dark:text-white text-gray-400">
                        No results found
                      </p>
                    )}
                    {!defaultValue && (
                      <p className="dark:text-white text-gray-400">
                        No recent searches
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="p-4 flex items-center text-gray-500 text-sm">
                <i className="fa-solid fa-arrow-up mr-1"></i>
                <i className="fa-solid fa-arrow-down mr-2"></i>
                <span>to navigate</span>
                <span className="ml-4 mr-2">↲</span>
                <span>enter key to select</span>
                <i className="fa-solid fa-times ml-4 mr-2"></i>
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForm;
