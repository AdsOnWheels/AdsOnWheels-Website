import { DebounceFunction } from "@/types/types";

// Function to debounce search input changes
const debounceSearch: DebounceFunction = (callback, delay) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default debounceSearch;
