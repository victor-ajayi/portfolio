import type { Metadata } from "next";

import { uncut as font } from "./fonts/fonts";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Victor Ajayi",
  description: "Software Developer",
  creator: "Victor Ajayi",
  authors: [{ name: "Victor Ajayi", url: "victorajayi.xyz" }],
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Engineering",
    "Frontend",
    "Developer",
    "Software",
    "victorajayi.xyz",
    "Victor Ajayi",
    "portfolio",
  ],
  icons: {
    icon: "/icon.jpg",
  },
  metadataBase: new URL("https://victorajayi.xyz"),
  openGraph: {
    title: "Victor Ajayi",
    description: "Software Developer",
    type: "website",
    url: "https://victorajayi.xyz",
    images: [
      {
        alt: "Victor Ajayi",
        width: 3600,
        height: 1890,
        url: "/og.png",
        type: "png",
      },
    ],
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@blackispeg",
    title: "Victor Ajayi",
    images: [{ url: "/og.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg ${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
