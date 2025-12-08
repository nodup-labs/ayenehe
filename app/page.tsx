"use client";

import AboutUs from "./_components/aboutUs";
import Blogs from "./_components/blogs";
import CallToActionManager from "./_components/callToAction_maneger";
import Events from "./_components/events";
import HeroSection from "./_components/heroSection";
import LogoUs from "./_components/logoUs";
import Services from "./_components/services";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className=" mt-28">
        <HeroSection />
      </div>
      <div className=" ">
        <LogoUs />
      </div>

      <Services />

      <AboutUs />

      <Events />
      <div className=" mt-28">
        <CallToActionManager />
      </div>

      <div className=" mt-28 mb-20">
        <h2 className="text-4xl font-bold text-center text-primary">
          جدیدترین خبر ها
        </h2>
        <p className="text-center text-gray-500 text-lg pt-2">
          جدیدترین مقالات و نکات کاربردی در دنیای کسب‌وکار و استارتاپ‌ها
        </p>

        <Blogs />
      </div>
    </div>
  );
}
