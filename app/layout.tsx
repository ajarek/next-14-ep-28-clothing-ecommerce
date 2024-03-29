import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Clothing E-commerce",
  description: "E-commerce for clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  data-theme='light'>
      <body className={inter.className}>
        <div className="max-w-[1440px] mx-auto">

        <Navbar />
        {children}
        </div>
        </body>
    </html>
  );
}
