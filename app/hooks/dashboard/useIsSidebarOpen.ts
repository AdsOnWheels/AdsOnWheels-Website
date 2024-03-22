"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const useIsSidebarOpen = (): boolean | undefined => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.toggleSidebar.isSidebar
  );

  return isSidebarOpen;
};

export default useIsSidebarOpen;
