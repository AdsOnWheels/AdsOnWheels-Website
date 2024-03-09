"use client";

import { useState } from "react";
import { FormData } from "@/types/types";

const useRequestHandler = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestHandler = async (
    validatedData: FormData,
    apiEndpoint: string,
    errorMessage?: string
  ) => {
    try {
      setPending(true);

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (!res.ok) {
        const errorMessageText = errorMessage || "Failed to submit form.";
        setError(errorMessageText);
        setPending(false);
        return null;
      }

      const data = await res.json();

      setPending(false);
      return data;
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred. Please try again later.");
      setPending(false);
      return null;
    }
  };

  return { pending, setPending, error, requestHandler };
};

export default useRequestHandler;
