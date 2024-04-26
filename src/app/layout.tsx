import type { Metadata } from "next";

import "../styles/globals.scss";

import { roboto, poppins, manrope } from "./fonts";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "News app",
  description: "Searching news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
