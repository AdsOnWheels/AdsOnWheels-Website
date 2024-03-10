import React from "react";
import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();

  const handleCancelClick = () => {
    router.back(); // Go to the previous page
  };

  return (
    <button
      className="inline-block px-8 py-2 mr-1 mb-0 text-xs font-bold leading-normal text-center text-zinc-500 uppercase align-middle transition-all ease-in bg-transparent border border-zinc-500 border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:shadow-xs hover:text-zinc-500 hover:opacity-75 hover:shadow-none active:scale-100 active:border-zinc-500 active:bg-zinc-500 active:text-white hover:active:border-zinc-500 active:hover:bg-transparent hover:active:text-zinc-500 hover:active:opacity-75"
      onClick={handleCancelClick}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
