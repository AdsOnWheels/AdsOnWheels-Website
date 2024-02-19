// import { useSelector } from "react-redux";

// import { RootState } from "@/redux/store";

// const useIsSidebarOpen = (): boolean | undefined => {
//   return useSelector((state: RootState) => state.toggle.mode);
// };

// export default useIsSidebarOpen;
"use client";

import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import { toggle } from "@/redux/slices/sidebarToggle";

const useIsSidebarOpen = (): boolean | undefined => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const isSidebarOpen = useSelector(
    (state: RootState) => state.toggleSidebar.isSidebar
  );

  if (pathname === "admin") {
    dispatch(toggle(false));
    return false;
  }

  return isSidebarOpen;
};

export default useIsSidebarOpen;
