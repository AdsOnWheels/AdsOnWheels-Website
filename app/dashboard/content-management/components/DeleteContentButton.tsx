"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Spinner from "../../components/Spinner";

interface Props {
  name: string;
  apiEndpoint: string;
}

const DeleteContentButton = ({ name, apiEndpoint }: Props) => {
  const [pending, setPending] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setPending(true);
      const res = await fetch(apiEndpoint, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success(`${name} deleted successfully`);

        setPending(false);
        // Invalidate the cache to trigger refetching of data
        queryClient.invalidateQueries();
        router.refresh();
      } else {
        throw new Error(`Failed to delete ${name}`);
      }
    } catch (error) {
      console.error(`Error deleting ${name}:`, error);
      toast.error("An unexpected error occurred. Please try again later.");
      setPending(false);
    }
  };

  return (
    <button
      className="text-sm font-semibold text-red-500 hover:text-red-600 dark:text-red-300 dark:hover:text-red-200"
      onClick={handleDelete}
      disabled={pending ? true : false}
    >
      <FontAwesomeIcon icon={faTrash} className="w-3 h-3.5 mr-1" />
      Delete
      {pending && <Spinner width="3" height="3" margin="1" />}
    </button>
  );
};

export default DeleteContentButton;
