import React, { ReactNode } from "react";
import { Header } from "./ui";

function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default NewsLayout;
