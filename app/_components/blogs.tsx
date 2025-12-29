"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import CardBlog from "./CardBlog";
import { blogPosts } from "@/lib/blogData";

const Blogs = () => {
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
        {blogPosts.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Link href={`/blog/${blog.id}`} className="block">
              <div className="h-full">
                <CardBlog
                  category={blog.category}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  date={blog.date}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Blogs;
