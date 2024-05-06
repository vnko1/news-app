import React, { ReactNode } from "react";
import { ProfileProvider } from "@/context";
import { Header } from "./ui";

function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <ProfileProvider>
      <Header />
      <main>{children}</main>
    </ProfileProvider>
  );
}

export default NewsLayout;
