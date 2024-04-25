import type { Metadata } from "next";

import "../styles/globals.scss";
import { Header } from "./UI";
import { roboto, poppins, manrope } from "./fonts";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
