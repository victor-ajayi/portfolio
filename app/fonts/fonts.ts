import { Inter } from "next/font/google";
import localfont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const uncut = localfont({
  src: "./UncutSans-Variable.ttf",
  display: "swap",
});
