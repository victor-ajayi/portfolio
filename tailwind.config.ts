import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "320px",
      "md-custom": "640px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
