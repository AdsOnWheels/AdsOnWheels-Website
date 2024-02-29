"use client";

import { usePathname } from "next/navigation";

const useIsMFAPage = () => {
  const pathname = usePathname();
  return pathname.startsWith("/auth/mfa/");
};

export default useIsMFAPage;
