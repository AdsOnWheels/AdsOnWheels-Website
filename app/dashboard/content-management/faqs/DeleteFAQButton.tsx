import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteFAQButton = ({ faqId }: { faqId: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleDelete = async (faqId: string) => {
    try {
      const response = await fetch(`/api/faqs/${faqId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("FAQ deleted successfully");
        // Invalidate the cache to trigger refetching of data
        queryClient.invalidateQueries();
        router.refresh();
      } else {
        throw new Error("Failed to delete FAQ");
      }
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <button
      className="text-sm font-semibold text-red-500 hover:text-red-600 dark:text-red-300 dark:hover:text-red-200"
      onClick={() => handleDelete(faqId)}
    >
      <FontAwesomeIcon icon={faTrash} className="w-3 h-3.5 mr-1" />
      Delete
    </button>
  );
};

export default DeleteFAQButton;
