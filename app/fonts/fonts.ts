import { Inter } from "next/font/google";
import localfont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const figtree = localfont({
  src: "./Figtree-Regular.ttf",
  display: "swap",
});
