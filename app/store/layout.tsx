import Menu from "@/components/Menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";




export const metadata: Metadata = {
  title: "Products",
  description: "E-commerce for men",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main className='min-h-[calc(100vh-64px)] flex '>
        <Menu/>
        {children}
        </main>
    
  );
}
