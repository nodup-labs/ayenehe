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
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 2222222,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
      image: "/image/cover-3.webp",
    },
    {
      title: "کارگاه طراحی وب",
      description: "یادگیری طراحی وب مدرن با تکنولوژی‌های جدید",
      price: 0,
      location: "تهران، خیابان ولیعصر",
      category: "آموزشی",
      date: "۱۴۰۳/۹/۱۵",
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
