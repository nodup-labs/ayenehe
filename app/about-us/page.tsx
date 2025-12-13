"use client";

import Ourstory from "./_components/ourstory";
import Ourvalues from "./_components/ourvalues";
import Statistics from "./_components/statistics";
import Team from "./_components/Team";

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6" dir="rtl">
      {/* بخش هیرو */}
      <section className="pt-80 pb-16 bg-gradient-to-l from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              درباره <span className="text-primary">خانه خلاق آیینه</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ما تیمی از متخصصان هستیم که با شغف و تعهد، ایده‌های شما را به
              حقیقت تبدیل می‌کنیم
            </p>
          </div>
        </div>
      </section>

      {/* بخش داستان ما */}
      <Ourstory />

      {/* بخش تیم */}
      <Team />

      {/* بخش آماری */}
      <Statistics />

      {/* بخش ارزش‌های ما */}
      <Ourvalues />
    </main>
  );
}
