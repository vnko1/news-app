import React, { ReactNode } from "react";
import { UserProvider } from "@/context";
import { Header } from "./ui";

function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <Header />
      <main>{children}</main>
    </UserProvider>
  );
}

export default NewsLayout;
