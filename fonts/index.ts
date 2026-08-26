import { Fraunces, Work_Sans } from "next/font/google";

// Display face — used for h1–h6 via the --font-heading variable.
// Weight range covers the light (300) large hero/section headlines
// down to medium (600) for smaller subheads. Italic is included for
// the inline emphasis treatment (e.g. the "light" accent word in the hero).
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

// Body/UI face — nav, buttons, labels, paragraph text via --font-sans.
export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});
