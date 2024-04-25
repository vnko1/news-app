import type { Metadata } from "next";

import { roboto, poppins, manrope } from "./fonts";
import "../styles/globals.scss";

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
