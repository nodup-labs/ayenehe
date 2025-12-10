// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav
        dir="rtl"
        className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 py-4 z-50"
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <Image src="/image/logo.png" alt="Logo" width={60} height={60} />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={isActive("/") ? "font-bold" : ""}>
              خانه
            </Link>
            <Link
              href="/business"
              className={isActive("/business") ? "font-bold" : ""}
            >
              کسب و کار ها
            </Link>
            <Link
              href="/events"
              className={isActive("/events") ? "font-bold" : ""}
            >
              رویدادها
            </Link>
            <Link href="/blog" className={isActive("/blog") ? "font-bold" : ""}>
              مجله کسب‌وکار
            </Link>
            <Link
              href="/contact-us"
              className={isActive("/contact-us") ? "font-bold" : ""}
            >
              تماس
            </Link>
            <Link
              href="/about-us"
              className={isActive("/about-us") ? "font-bold" : ""}
            >
              درباره ما
            </Link>
          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:flex">
            <Button variant="secondary" size="lg">
              حساب کاربری
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <IconMenu2 size={32} />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9000]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-[9999]
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <Image src="/image/logo.png" alt="Logo" width={60} height={60} />

          <button onClick={() => setMobileOpen(false)}>
            <IconX size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-5 text-base font-medium">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            خانه
          </Link>
          <Link href="/business" onClick={() => setMobileOpen(false)}>
            کسب و کار ها
          </Link>
          <Link href="/events" onClick={() => setMobileOpen(false)}>
            رویدادها
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)}>
            مجله کسب‌وکار
          </Link>
          <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
            تماس
          </Link>
          <Link href="/about-us" onClick={() => setMobileOpen(false)}>
            درباره ما
          </Link>

          <Button
            className="mt-4"
            size="lg"
            onClick={() => setMobileOpen(false)}
          >
            حساب کاربری
          </Button>
        </div>
      </div>
    </>
  );
}
