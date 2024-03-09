"use client";

import { usePathname } from "next/navigation";

const useIsMFAPage = () => {
  const pathname = usePathname();
  return pathname.startsWith("/auth/mfa/") || pathname.startsWith("/dashboard");
};

export default useIsMFAPage;
