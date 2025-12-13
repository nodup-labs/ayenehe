const FEATURES = [
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
];

const Features = () => {
  return (
    <div className="container mx-auto mb-20 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary mb-8 md:mb-12">
        ویژگی‌های کسب‌وکارهای ما
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {FEATURES.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200 h-full"
          >
            <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
