import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      NAV
      {children}
    </>
  );
}

export default HomeLayout;
