"use client";

import { usePathname } from "next/navigation";

const useIsAdminPanel = () => {
  const pathname = usePathname();
  return pathname.startsWith("/admin");
};

export default useIsAdminPanel;
