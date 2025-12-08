'use client';

import { IconStar, IconBriefcase, IconUsers, IconTarget } from "@tabler/icons-react";
import Image from "next/image";

export default function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: "علی محمدی",
      role: "مدیر پروژه",
      bio: "با تجربه 8 سال در مدیریت پروژه‌های بزرگ",
      image: "/image/team-1.jpg",
    },
    {
      id: 2,
      name: "فاطمه رحیمی",
      role: "طراح UX/UI",
      bio: "خالق تجربه‌های کاربری فوق‌العاده و منحصربه‌فرد",
      image: "/image/team-2.jpg",
    },
    {
      id: 3,
      name: "محمد هاشمی",
      role: "توسعه‌دهنده Full Stack",
      bio: "متخصص در فناوری‌های جدید و معماری نرم‌افزار",
      image: "/image/team-3.jpg",
    },
    {
      id: 4,
      name: "سارا نوری",
      role: "کارشناس بازاریابی",
      bio: "استراتژیست‌ دیجیتال و متخصص رشد کسب‌وکار",
      image: "/image/team-4.jpg",
    },
    {
      id: 5,
      name: "رضا احمدی",
      role: "مشاور استراتژیک",
      bio: "رهبری تیم برای دستیابی به اهداف بزرگ",
      image: "/image/team-5.jpg",
    },
    {
      id: 6,
      name: "نیلا کریمی",
      role: "کارشناس کیفیت",
      bio: "تضمین‌کننده بهترین کیفیت در هر پروژه",
      image: "/image/team-6.jpg",
    },
  ];

  const values = [
    {
      icon: IconTarget,
      title: "نوآوری",
      description: "همواره به دنبال راه‌های جدید و خلاقانه برای حل مسائل",
    },
    {
      icon: IconUsers,
      title: "همکاری",
      description: "تیمی متحد که با شما برای موفقیت کار می‌کند",
    },
    {
      icon: IconBriefcase,
      title: "حرفه‌ای‌گری",
      description: "استانداردهای بالای کیفی در تمام کارهای ما",
    },
    {
      icon: IconStar,
      title: "تعهد",
      description: "تعهد کامل به رضایت و موفقیت شما",
    },
  ];

  return (
    <main className="min-h-screen" dir="rtl">
      {/* بخش هیرو */}
      <section className="pt-80 pb-16 bg-gradient-to-l from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              درباره <span className="text-primary">خانه خلاق آیینه</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ما تیمی از متخصصان هستیم که با شغف و تعهد، ایده‌های شما را به حقیقت
              تبدیل می‌کنیم
            </p>
          </div>
        </div>
      </section>

      {/* بخش داستان ما */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">داستان ما</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                خانه خلاق آیینه با داشتن دیدی روشن، به سال ۱۴۰۱ تاسیس شد. ما
                باور داریم که هر کسب‌وکار نیاز به راهنمایی متخصصانه و نوآورانه دارد.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                از آن زمان تا به‌امروز، صدها پروژه موفق را انجام داده‌ایم و هزاران
                مشتری راضی داریم. تیم ما با تجربه و علم، بهترین خدمات را ارائه می‌دهد.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                هدف ما این است که شما را در مسیر موفقیت همراهی کنیم و ایده‌های شما را
                به یک تجارت پوياي موفق تبدیل کنیم.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <Icon size={40} className="text-primary mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* بخش تیم */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">تیم ما</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              افراد خلاقی و متخصصی که به هر پروژه جان می‌بخشند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 bg-gradient-to-b from-primary to-purple-400 flex items-center justify-center overflow-hidden">
                  <div className="w-48 h-48 rounded-full bg-white bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-44 h-44 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <span className="text-6xl text-white font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش آماری */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">۳۴۸۷</div>
              <p className="text-lg opacity-90">پشتیبانی</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">۲۰۰۰</div>
              <p className="text-lg opacity-90">رضایت مشتری</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">۱۵۰۰</div>
              <p className="text-lg opacity-90">پروژه موفق</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">۵۰۰</div>
              <p className="text-lg opacity-90">کلاینت فعال</p>
            </div>
          </div>
        </div>
      </section>

      {/* بخش ارزش‌های ما */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              چرا ما را انتخاب کنید؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ما تنها یک شرکت نیستیم، ما یک شریک موفقیت شما هستیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">تمرکز</h3>
              <p className="text-gray-600">
                تمام توجه ما بر رسیدن به اهداف شما است
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">خلاقیت</h3>
              <p className="text-gray-600">
                راه‌حل‌های خلاقانه برای چالش‌های پیچیده
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">سرعت</h3>
              <p className="text-gray-600">
                تحویل سریع و کارآمد بدون تنزل کیفیت
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">شراکت</h3>
              <p className="text-gray-600">
                ارتباط مستمر و پشتیبانی تا پایان پروژه
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}