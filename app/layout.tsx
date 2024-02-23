import type { Metadata } from "next";
import { inter as font } from "./fonts/fonts";

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
        <main className="mx-auto max-w-[800px] px-3 md-custom:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
