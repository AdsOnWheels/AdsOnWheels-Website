import React from "react";
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
        console.log("Search results:", data);

        // Clear form
        reset();
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

  return (
    <form onSubmit={onSubmit} className="flex items-center">
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
            {...register("search")}
            onKeyDown={handleKeyPress}
            className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-full leading-5 dark:bg-[#141728] bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
