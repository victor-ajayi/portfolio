import type { Metadata } from "next";
import { uncut as font } from "./fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Ajayi | Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
