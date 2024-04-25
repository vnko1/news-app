import { Manrope, Roboto, Poppins } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

export const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
  variable: "--font-poppins",
});
