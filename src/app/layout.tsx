import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rome | Location-Based Scheduling",
  description: "Optimize your route. Manage booking zones. The smart way for mobile service providers to work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-rome-white text-rome-black`}>
        {children}
      </body>
    </html>
  );
}