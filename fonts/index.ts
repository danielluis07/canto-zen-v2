import { Inter, Roboto } from "next/font/google";

export const robotoHeading = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
