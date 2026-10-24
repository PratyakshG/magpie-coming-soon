import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magpie Service",
  description: "Magpie Services | A Creative Studio Agency",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <footer className="border-t border-t-neutral-600 py-2 px-6 flex items-center justify-end text-sm font-inter tracking-tight text-neutral-400 bg-neutral-900">
          &copy; 2026 Magpie Services. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
