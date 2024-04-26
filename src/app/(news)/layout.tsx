import React, { ReactNode } from "react";
import { Header } from "./ui";

function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      NAV
      {children}
    </>
  );
}

export default NewsLayout;
