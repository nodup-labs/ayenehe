const HeroBusiness = () => {
  const stats = [
    { label: "کسب‌وکار راه‌اندازی‌شده", value: "4+" },
    { label: "تیم فعال", value: "50+" },
    { label: "پروژه انجام‌شده", value: "100+" },
    { label: "مشتری رضایت‌مند", value: "200+" },
  ];
  return (
    <div className="mt-28 mb-20 ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
          کسب‌وکارهای راه‌اندازی‌شده
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          ما تا کنون چندین کسب‌وکار نوآورانه و موفق را راه‌اندازی کرده‌ایم که در
          حوزه‌های مختلف کار می‌کنند و به رشد و تکامل اقتصادی کمک می‌کنند.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-secondary/15 to-primary/10 rounded-lg p-4 sm:p-6 text-center border border-gray-200"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-2">
              {stat.value}
            </div>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroBusiness;
