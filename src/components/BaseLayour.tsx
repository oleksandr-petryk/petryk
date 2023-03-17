import type React from "react";
import { FC } from "react";

import { NavBar } from "./NavBar";

export const BaseLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <NavBar />

      <div className="2xl:py-16 sm:pt-4 sm:pb-24">{children}</div>
    </>
  );
};
