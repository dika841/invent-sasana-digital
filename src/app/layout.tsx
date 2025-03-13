import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntDProvider from "./_components/provider/theme";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasana Digital Inventory",
  description: "Application for Sasana Digital Inventory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <AntDProvider>{children}</AntDProvider>
      </body>
    </html>
  );
}
