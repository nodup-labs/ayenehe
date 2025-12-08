import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/nav";
import Footer from "./_components/footer";
import { IRANYekan } from "@/lib/font";





export const metadata: Metadata = {
  title: "آینه",
  description: "پلتفرم اشتراک‌گذاری ویدیو ایرانی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IRANYekan.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
