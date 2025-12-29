"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardBlog from "./CardBlog";

const Blogs = () => {
  const blogs = [
    {
      category: "مدرسه الماس",
      image: "/image/cover-3.webp",
      title: "آماده‌سازی آزمون ورود به المپیاد",
      description:
        "آماده سازی بیش از دویست نفر از دانش آموزان استعداد های درخشان کمیته امداد امام خمینی برای شرکت در ازمون المپیاد توسط استارتاپ مدرسه الماس ",
      date: "2025-12-07",
    },
    {
      category: "سامانه ماه",
      image: "/image/cover-3.webp",
      title: "مسئولیت اجتماعی هوشمند",
      description:
        "طراحی بستر هوشمند تأمین مالی استارتاپ‌های تحت حمایت خانه خلاق  آینه با استفاده از مسئولیت اجتماعی شرکت‌ها توسط استارتاپ ماه",
      date: "2025-12-06",
    },
    {
      category: "خانه نگارین",
      image: "/image/cover-3.webp",
      title: "محل تجمع هنرمندان صنایع دستی",
      description:
        "طراحی بازار تخصصی فروش محصولات صنایع دستی با رویکرد صادرات‌محور توسط استارتاپ خانه نگارین",
      date: "2025-12-05",
    },
    {
      category: "سامانه حنا",
      image: "/image/cover-3.webp",
      title: "حمایت‌های نوآورانه اجتماعی",
      description:
        "طراحی بازار هوشمند با هدف تأمین کالاهای اساسی برای خانواده‌های کم‌برخوردار توسط استارتاپ حنا",
      date: "2025-12-04",
    },
  ];

  return (
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
        {blogs.map((blog, idx) => (
          <SwiperSlide key={blog.title || idx}>
            <CardBlog
              category={blog.category}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Blogs;
