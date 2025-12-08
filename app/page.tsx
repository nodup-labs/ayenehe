"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./_components/heroSection";
import Card from "./_components/CardServices";
import { IconBulb, IconCertificate, IconChartDots2, IconHeadset, IconReport, IconRocket, IconTarget, IconUsers } from "@tabler/icons-react";
import EventCard from "./_components/eventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LogoUs from "./_components/logoUs";
import CallToActionManager from "./_components/callToAction_maneger";
import CardBlog from "./_components/CardBlog";

export default function Home() {

  const cards = [
    {
      title: "تیم‌سازی",
      description: "ساخت تیم حرفه‌ای برای کسب‌وکار شما، با هدف ایجاد هماهنگی، افزایش بهره‌وری و رشد پایدار در مسیر موفقیت تجاری.",
      icon: <IconUsers stroke={2} />,
    },

        {
      title: "مشاوره کسب‌وکار",
      description: "ارائه راهنمایی حرفه‌ای و مشاوره تخصصی برای تبدیل ایده‌های شما به کسب‌وکارهای واقعی، پایدار و موفق در مسیر رشد و توسعه.",
      icon: <IconBulb stroke={2} />,
    },
       {
      title: "راه‌اندازی استارتاپ",
      description: "راه‌اندازی استارتاپ شامل ارائه مشاوره و پشتیبانی حرفه‌ای برای تبدیل ایده‌های نوآورانه شما به کسب‌وکار واقعی، پایدار و موفق در بازار رقابتی است.",
      icon: <IconRocket stroke={2} />,
    },
       {
      title: "رشد و توسعه",
      description:"استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
          {
      title: "رشد و توسعه",
      description:"استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
          {
      title: "رشد و توسعه",
      description:"استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
          {
      title: "رشد و توسعه",
      description:"استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
          {
      title: "رشد و توسعه",
      description:"استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
    
  ];
    const events = [  
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image : "/image/cover-3.webp",
    },
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
       image : "/image/cover-3.webp",
    },
     {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
       image : "/image/cover-3.webp",
    },
     {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 2222222,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
       image : "/image/cover-3.webp",
    },
     {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
       image : "/image/cover-3.webp",
    },
     {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
       image : "/image/cover-3.webp",
    },
    ];

  const blogs = [
    {
      category: "توسعه وب",
      image: "/image/cover-3.webp",
      title: "مبتدی‌ترین راهنمای شروع توسعه وب",
      description: "یادگیری اصول پایه‌ای توسعه وب و ساخت سایت‌های حرفه‌ای با تکنولوژی‌های مدرن",
      date: "2025-12-07",
    },
    {
      category: "طراحی UI/UX",
      image: "/image/cover-3.webp",
      title: "اصول طراحی رابط کاربری جذاب",
      description: "یادگیری اصول طراحی UI/UX برای ایجاد تجربه کاربری بهتر و طراحی‌های زیبا",
      date: "2025-12-06",
    },
    {
      category: "استراتژی کسب‌وکار",
      image: "/image/cover-3.webp",
      title: "چگونه استارتاپ خود را رشد دهید",
      description: "استراتژی‌های اثربخش برای رشد سریع استارتاپ و افزایش درآمد",
      date: "2025-12-05",
    },
    {
      category: "بازاریابی دیجیتال",
      image: "/image/cover-3.webp",
      title: "تکنیک‌های بازاریابی دیجیتال موثر",
      description: "یادگیری روش‌های بازاریابی دیجیتال برای افزایش فروش و مشتریان",
      date: "2025-12-04",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto mt-28">
        <HeroSection />
      </div>
      <div className=" container mx-auto">
      <LogoUs />
      </div>
     
      <div id="Services" className=" pt-20 container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary">خدمات خانه خلاق آیینه</h2>
        <p className="text-center text-gray-500 text-lg pt-2">
          خلاقیت و تجربه را ترکیب می‌کنیم تا ایده‌هایتان به واقعیت برسد.
        </p>
        <div dir="rtl" className="grid grid-cols-4 grid-rows-2 gap-4 pt-8">
          {cards.map((card, idx) => (
            <div key={idx}>
              <Card title={card.title} description={card.description} icon={card.icon} />
            </div>
          ))}
        </div>
      </div>
      
      <div  id="AboutUs" className="pt-40 container mx-auto">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* چپ - درباره ما */}
          <div dir="rtl">
            <h2 className="text-4xl font-bold text-primary mb-4">درباره ما</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              خانه خلاق آیینه متشکل از تیم متخصصی است که با تجربه و خلاقیت بالا، به شما کمک می‌کند تا ایده‌های شما را به کسب‌وکارهای واقعی و موفق تبدیل کنید. ما با ترکیب استراتژی، نوآوری و مشاوره حرفه‌ای، مسیر رشد و توسعه کسب‌وکار شما را هموار می‌کنیم. همراه ما باشید تا موفقیت را تجربه کنید.
            </p>
             <div className="w-full flex justify-start items-center gap-8 mt-8">

      {/* پشتیبانی */}
      <div className="flex items-center gap-3">
        <IconHeadset size={34} stroke={1.5} className="text-primary" />
        <div className="flex flex-col text-right">
          <span className="text-xl font-bold text-primary">۳۴۸۷</span>
          <span className="text-sm text-black">پشتیبانی</span>
        </div>
      </div>

      {/* رضایت مشتری */}
      <div className="flex items-center gap-3">
        <IconCertificate size={34} stroke={1.5} className="text-primary" />
        <div className="flex flex-col text-right">
          <span className="text-xl font-bold text-primary">۲۰۰۰</span>
          <span className="text-sm text-black">رضایت مشتری</span>
        </div>
      </div>

      {/* پروژه موفق */}
      <div className="flex items-center gap-3">
        <IconTarget size={34} stroke={1.5} className="text-primary" />
        <div className="flex flex-col text-right">
          <span className="text-xl font-bold text-primary">۲۰۰۰</span>
          <span className="text-sm text-black">پروژه موفق</span>
        </div>
      </div>

      
   

    </div>
            
          </div>
          
          {/* راست - عکس */}
          <div className="flex justify-center">
            <Image
              src="/image/about.jpg"
              alt="درباره ما"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div id="Events" className="pt-40 container mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-primary">رویدادها</h2>
        <p className="text-center text-gray-500 text-lg pt-2">
          خلاقیت و تجربه را ترکیب می‌کنیم تا ایده‌هایتان به واقعیت برسد.
        </p>
        <div dir="rtl" className="pt-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={4}
          
           
            autoplay={{ delay: 5000 }}
            className="w-full"
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx}>
                <EventCard image={event.image} title={event.title} description={event.description} price={event.price} location={event.location} category={event.category} date={event.date} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    <div className="container mx-auto mt-28">
      <CallToActionManager />
    </div>

    <div className="container mx-auto mt-28 mb-20">
       <h2 className="text-4xl font-bold text-center text-primary">جدیدترین خبر ها</h2>
        <p className="text-center text-gray-500 text-lg pt-2">
          جدیدترین مقالات و نکات کاربردی در دنیای کسب‌وکار و استارتاپ‌ها
        </p>
      
      <div dir="rtl" className="grid grid-cols-4 gap-4 pt-8">
        {blogs.map((blog, idx) => (
          <div key={idx}>
            <CardBlog
              category={blog.category}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
