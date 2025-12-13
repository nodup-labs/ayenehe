import {
  IconStar,
  IconBriefcase,
  IconUsers,
  IconTarget,
} from "@tabler/icons-react";
const Ourstory = () => {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">داستان ما</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              خانه خلاق آیینه با داشتن دیدی روشن، به سال ۱۴۰۱ تاسیس شد. ما باور
              داریم که هر کسب‌وکار نیاز به راهنمایی متخصصانه و نوآورانه دارد.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              از آن زمان تا به‌امروز، صدها پروژه موفق را انجام داده‌ایم و هزاران
              مشتری راضی داریم. تیم ما با تجربه و علم، بهترین خدمات را ارائه
              می‌دهد.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              هدف ما این است که شما را در مسیر موفقیت همراهی کنیم و ایده‌های شما
              را به یک تجارت پوياي موفق تبدیل کنیم.
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
  );
};

export default Ourstory;
