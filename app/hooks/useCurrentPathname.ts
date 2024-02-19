"use client";

import { usePathname } from "next/navigation";

const useCurrentPathname = (): string => {
  return usePathname();
};

export default useCurrentPathname;
