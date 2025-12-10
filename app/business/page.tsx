"use client";

import { IconArrowUpRight, IconCheck, IconTarget } from "@tabler/icons-react";

export default function BusinessPage() {
  const businesses = [
    {
      id: 1,
      title: "استارتاپ فناوری",
      description:
        "راه‌اندازی استارتاپ‌های فناوری نوآورانه با تمرکز بر حل مسائل واقعی بازار و ایجاد ارزش افزوده برای مشتریان.",
      status: "فعال",
      image: "🚀",
      achievements: [
        "100+ مشتری فعال",
        "10+ محصول موفق",
        "3 دور تامین مالی",
      ],
    },
    {
      id: 2,
      title: "خدمات مشاوره تجاری",
      description:
        "ارائه مشاوره تخصصی برای کسب‌وکارهای کوچک و متوسط در زمینه استراتژی، بازاریابی و رشد پایدار.",
      status: "فعال",
      image: "📊",
      achievements: [
        "50+ کسب‌وکار پذیرفته‌شده",
        "85% نرخ موفقیت",
        "۲ سال تجربه",
      ],
    },
    {
      id: 3,
      title: "آموزش و توسعه تیم",
      description:
        "برنامه‌های آموزشی جامع برای توسعه مهارت‌های تیم و افزایش ظرفیت کارکنان در سازمان‌های مختلف.",
      status: "فعال",
      image: "👨‍🎓",
      achievements: [
        "500+ متدرب",
        "20+ دوره آموزشی",
        "95% رضایت مندی",
      ],
    },
    {
      id: 4,
      title: "توسعه محصول دیجیتال",
      description:
        "طراحی و توسعه محصولات دیجیتال نوآورانه با استفاده از آخرین تکنولوژی‌ها و متدولوژی‌های چابک.",
      status: "فعال",
      image: "💻",
      achievements: [
        "15+ پروژه موفق",
        "10+ پروژه جاری",
        "98% کیفیت کد",
      ],
    },
  ];

  const stats = [
    { label: "کسب‌وکار راه‌اندازی‌شده", value: "4+" },
    { label: "تیم فعال", value: "50+" },
    { label: "پروژه انجام‌شده", value: "100+" },
    { label: "مشتری رضایت‌مند", value: "200+" },
  ];

  return (
    <div dir="rtl" className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto mt-28 mb-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">
            کسب‌وکارهای راه‌اندازی‌شده
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ما تا کنون چندین کسب‌وکار نوآورانه و موفق را راه‌اندازی کرده‌ایم که در
            حوزه‌های مختلف کار می‌کنند و به رشد و تکامل اقتصادی کمک می‌کنند.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-secondary/15 to-primary/10 rounded-lg p-6 text-center border border-gray-200"
            >
              <div className="text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Businesses Grid */}
      <div className="container mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          پرتفوی کسب‌وکار
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-secondary/30"
            >
              {/* Card Header with Icon */}
              <div className="bg-gradient-to-r from-secondary/12 to-primary/8 p-8 text-center">
                <div className="text-6xl mb-4">{business.image}</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {business.title}
                </h3>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {business.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {business.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <IconTarget size={20} className="ml-2 text-secondary" />
                    دستاوردها
                  </h4>
                  {business.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <IconCheck size={20} className="text-green-500 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  بیشتر بدانید
                  <IconArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto mb-20">
        <div className="bg-gradient-to-r from-secondary via-secondary/90 to-primary/80 rounded-xl p-12 text-white text-center shadow-lg">
          <h2 className="text-4xl font-bold mb-4">
            عضو تیم خلاق آیینه شوید
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            اگر دنبال یک تیم پویا، خلاق و متخصص برای شروع کسب‌وکار خود هستید، ما
            آماده‌ایم که کنار شما باشیم.
          </p>
          <button className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            ارتباط با ما
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          ویژگی‌های کسب‌وکارهای ما
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "تیم متخصص",
              description: "تیم‌های مجرب و متخصص در هر حوزه تخصصی",
            },
            {
              title: "نوآوری مداوم",
              description: "تمرکز مداوم بر نوآوری و بهبود محصول",
            },
            {
              title: "رشد پایدار",
              description: "استراتژی‌های ثابت‌شده برای رشد کسب‌وکار",
            },
            {
              title: "پشتیبانی ۲۴/۷",
              description: "پشتیبانی مداوم برای موفقیت پایدار",
            },
            {
              title: "شفافیت کامل",
              description: "ارتباط شفاف و مستمر با تمام ذی‌نفعان",
            },
            {
              title: "تاثیر اجتماعی",
              description: "تمرکز بر کسب‌وکارهایی با تاثیر اجتماعی مثبت",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
