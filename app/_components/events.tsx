"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "./eventCard";
const Events = () => {
  const events = [
    {
      title: "کارگاه طراحی وب مدرن",
      description:
        "آشنایی عملی با مفاهیم طراحی وب مدرن، UI/UX و ابزارهای موردنیاز برای ورود به بازار کار.",
      price: 0,
      location:
        "تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد سابق)، پلاک ۲۲",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "بوت‌کمپ ورود به بازار دیجیتال",
      description:
        "مسیر فشرده برای یادگیری مهارت‌های پایه موردنیاز جهت فعالیت در پروژه‌های واقعی دیجیتال.",
      price: 0,
      location:
        "تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد سابق)، پلاک ۲۲",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۲۰",
      image: "/image/cover-3.webp",
    },
    {
      title: "نشست تجربه‌محور استارتاپ‌ها",
      description:
        "گفت‌وگو با بنیان‌گذاران استارتاپ‌ها درباره چالش‌ها، اشتباهات و مسیر واقعی رشد.",
      price: 0,
      location:
        "تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد سابق)، پلاک ۲۲",
      category: "رویداد",
      date: "۱۴۰۳/۹/۲۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "کارگاه تجاری‌سازی ایده",
      description:
        "بررسی مراحل تبدیل ایده به محصول قابل ارائه در بازار با تمرکز بر مدل درآمدی.",
      price: 0,
      location:
        "تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد سابق)، پلاک ۲۲",
      category: "کارگاه تخصصی",
      date: "۱۴۰۳/۱۰/۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "دوره آشنایی با تیم‌سازی استارتاپی",
      description:
        "یادگیری اصول ساخت تیم، تقسیم نقش‌ها و جلوگیری از خطاهای رایج در شروع کار.",
      price: 0,
      location:
        "تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد سابق)، پلاک ۲۲",
      category: "آموزشی",
      date: "۱۴۰۳/۱۰/۱۰",
      image: "/image/cover-3.webp",
    },
    {
      title: "نشست مسیر رشد کسب‌وکار",
      description:
        "تحلیل مسیر رشد کسب‌وکارها از شروع تا مقیاس‌پذیری با نگاه واقع‌بینانه.",
      price: 0,
      location:
        "تهران، خیابان جمهوری، خیابان رازی، کوچه شهبازیان (شیرزاد سابق)، پلاک ۲۲",
      category: "رویداد",
      date: "۱۴۰۳/۱۰/۱۵",
      image: "/image/cover-3.webp",
    },
  ];

  return (
    <div id="Events" className="pt-40 mb-20">
      <h2 className="text-4xl font-bold text-center text-primary">رویدادها</h2>
      <p className="text-center text-gray-500 text-lg pt-2">
        خلاقیت و تجربه را ترکیب می‌کنیم تا ایده‌هایتان به واقعیت برسد.
      </p>
      <div dir="rtl" className="pt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 5000 }}
          className="w-full"
        >
          {events.map((event, idx) => (
            <SwiperSlide key={idx}>
              <EventCard
                image={event.image}
                title={event.title}
                description={event.description}
                price={event.price}
                location={event.location}
                category={event.category}
                date={event.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
