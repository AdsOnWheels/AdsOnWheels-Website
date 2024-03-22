"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const useTransparentSidebar = (): boolean | undefined => {
  const isTransparent = useSelector(
    (state: RootState) => state.toggleTransparentSidebar.isTransparent
  );

  return isTransparent;
};

export default useTransparentSidebar;
