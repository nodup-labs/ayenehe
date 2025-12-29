"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const usefulLinks = [
  { name: "خانه", href: "/" },
  { name: "خدمات", href: "/services" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contactus" },
  { name: "وبلاگ", href: "/blog" },
];

const socialLinks = [
  {
    name: "اینستاگرام",
    href: "https://instagram.com",
    icon: <IconBrandInstagram size={32} color="white" />,
  },
  {
    name: "تلگرام",
    href: "https://t.me",
    icon: <IconBrandTelegram size={32} color="white" />,
  },
  {
    name: "واتساپ",
    href: "https://wa.me",
    icon: <IconBrandWhatsapp size={32} color="white" />,
  },
  {
    name: "گیت‌هاب",
    href: "https://github.com/ayeneh",
    icon: <Image src="/image/bale1.png" alt="github" width={32} height={32} className="text-white"/>,
  },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-gray-900 text-white pt-10 pb-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Brief */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/image/logo.png"
            alt="لوگو"
            width={80}
            height={80}
            className="mb-2"
          />
          <p className="text-sm text-gray-300 text-center md:text-right">
            خانه خلاق و نوآوری آینه 
          </p>
        </div>
        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-3 text-lg">لینک‌های مفید</h3>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-3 text-lg">اطلاعات تماس</h3>
          <ul className="space-y-2 text-sm">
            <li>
              آدرس: تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد
              سابق)، پلاک ۲۲{" "}
            </li>
            <li>
              تلفن:{" "}
              <a href="tel:02112345678" className="hover:text-primary">
                ۶۶۴۰۴۴۹۵-۰۲۱
              </a>
            </li>
            <li>
              تلفن:{" "}
              <a href="tel:02112345678" className="hover:text-primary">
                ۶۶۴۶۶۳۷۵-۰۲۱
              </a>
            </li>
            <li>
              ایمیل:{" "}
              <a href="" type="email" className="hover:text-primary">
                info@ayenehouse.ir
              </a>
            </li>

            <li>ساعات کاری: ۹ تا ۲۱ (شنبه تا پنجشنبه)</li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-3 text-lg">شبکه‌های اجتماعی</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} تمامی حقوق ای سایت برای خانه خلاق و نوآوری محفوظ است 
      </div>
    </footer>
  );
}
