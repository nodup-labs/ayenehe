import { IconArrowUpRight, IconCheck, IconTarget } from "@tabler/icons-react";

const BusinessesGrid = () => {
  const businesses = [
    {
      id: 1,
      title: "استارتاپ فناوری",
      description:
        "راه‌اندازی استارتاپ‌های فناوری نوآورانه با تمرکز بر حل مسائل واقعی بازار و ایجاد ارزش افزوده برای مشتریان.",
      status: "فعال",
      image: "🚀",
      achievements: ["100+ مشتری فعال", "10+ محصول موفق", "3 دور تامین مالی"],
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
      achievements: ["500+ متدرب", "20+ دوره آموزشی", "95% رضایت مندی"],
    },
    {
      id: 4,
      title: "توسعه محصول دیجیتال",
      description:
        "طراحی و توسعه محصولات دیجیتال نوآورانه با استفاده از آخرین تکنولوژی‌ها و متدولوژی‌های چابک.",
      status: "فعال",
      image: "💻",
      achievements: ["15+ پروژه موفق", "10+ پروژه جاری", "98% کیفیت کد"],
    },
  ];
  return (
    <div className="mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary mb-8 md:mb-12">
        پرتفوی کسب‌وکار
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-secondary/30"
          >
            {/* Card Header with Icon */}
            <div className="bg-gradient-to-r from-secondary/12 to-primary/8 p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">
                {business.image}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                {business.title}
              </h3>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {business.status}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-6">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
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
                    <span className="text-sm sm:text-base">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                بیشتر بدانید
                <IconArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessesGrid;
