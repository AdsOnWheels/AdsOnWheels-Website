"use server";

import React, { ReactNode } from "react";
import { signOut } from "@/auth";

const SignOut = ({ children }: { children: ReactNode }) => {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      {children}
    </form>
  );
};

export default SignOut;
