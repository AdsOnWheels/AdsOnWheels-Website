import { FormData } from "@/types/types";
import { useState } from "react";

const useRequestHandler = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const requestHandler = async (
    validatedData: FormData,
    apiEndpoint: string
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
        const errorMessage = await res.text();
        setError(`Failed to submit form: ${errorMessage}`);
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
