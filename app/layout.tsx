import { IRANYekan } from "@/lib/font";
import type { Metadata } from "next";
import Footer from "./_components/footer";
import Navbar from "./_components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "آینه",
  description: "خانه اخلاق و نوآوری اینه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IRANYekan.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
