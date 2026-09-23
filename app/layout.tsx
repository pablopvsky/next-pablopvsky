import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pablopvsky = localFont({
  src: [
    {
      path: "../public/fonts/Pablopvsky-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pablopvsky-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pablopvsky",
});

export const metadata: Metadata = {
  title: "Pablopvsky",
  description:
    "A short letter from Pablo O. (pablopvsky): Advertiser and Head of Operations at Somos Gente Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pablopvsky.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
