import { sanitizeContent } from "@/utils/sanitizeContent";
import { useState } from "react";
import { FieldValues, UseFormReset, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const useFormSubmission = (
  apiEndpoint: string,
  editorName: string,
  reset: UseFormReset<FieldValues>
) => {
  const [pending, setPending] = useState(false);
  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      setPending(true);

      // Sanitize the content value to remove HTML elements
      formData[editorName] = sanitizeContent(formData[editorName], editorName);

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Success! Your post has been published.");

        // Clear form
        reset();
      } else if (res.status === 409) {
        toast.error("Failed to submit form. Duplicate entry.");
      } else {
        throw new Error(
          "An unexpected error occurred. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setPending(false);
    }
  });

  return { onSubmit, pending };
};

export default useFormSubmission;
