import { MuseoModerno, Poppins } from "next/font/google";

export const museo = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-musero-moderno",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
