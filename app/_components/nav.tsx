// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav dir='rtl' className={`fixed top-0 left-0 right-0 w-full bg-white shadow-md px-6 py-4 flex items-center justify-between transition-transform duration-300 ease-in-out z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='container mx-auto flex items-center justify-between'>
         {/* Logo سمت راست */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>
      </div>

      {/* لینک‌ها وسط */}
      <div className="flex items-center gap-6">
        {/* سمت چپ لینک‌ها */}
        <Link href="/" className={isActive('/') ? 'font-bold' : ''}>خانه</Link>
        <Link href="/business" className={isActive('/business') ? 'font-bold' : ''}>کسب و کار ها</Link>
        <Link href="/events" className={isActive('/events') ? 'font-bold' : ''}>رویدادها</Link>

        {/* سمت راست لینک‌ها */}
        <Link href="/blog" className={isActive('/blog') ? 'font-bold' : ''}>مجله کسب وکار </Link>
        <Link href="/contact" className={isActive('/contact') ? 'font-bold' : ''}>تماس</Link>
        <Link href="/aboutus" className={isActive('/aboutus') ? 'font-bold' : ''}>درباره ما</Link>
      </div>

      {/* دکمه حساب کاربری سمت چپ */}
      <div>
        <Button variant={"secondary"} size={"lg"}>حساب کاربری</Button>
       
      </div>
        </div>
      
     
    </nav>
  );
}
