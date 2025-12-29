import {
  IconBuilding,
  IconBulb,
  IconChartDots2,
  IconCompass,
  IconRocket,
  IconSpeakerphone,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import Card from "./CardServices";

const Services = () => {
  const cards = [
    {
      title: "تیم‌سازی هدفمند",
      description:
        "کمک به تشکیل و توسعه تیم‌های کارآمد با تمرکز بر نقش‌ها، مهارت‌ها و هماهنگی درون‌تیمی برای اجرای مؤثر ایده‌ها و رشد کسب‌وکار.",
      icon: <IconUsers stroke={2} />,
    },
    {
      title: "مشاوره تخصصی کسب‌وکار",
      description:
        "تحلیل وضعیت فعلی کسب‌وکار و ارائه راهکارهای عملی برای حل چالش‌ها، تصمیم‌گیری بهتر و حرکت در مسیر درست رشد.",
      icon: <IconBulb stroke={2} />,
    },
    {
      title: "راه‌اندازی استارتاپ",
      description:
        "همراهی گام‌به‌گام از ایده تا راه‌اندازی، شامل اعتبارسنجی، مدل کسب‌وکار و آماده‌سازی برای ورود به بازار.",
      icon: <IconRocket stroke={2} />,
    },
    {
      title: "تجاری‌سازی محصول",
      description:
        "تبدیل ایده یا محصول به یک مدل درآمدی مشخص با تمرکز بر بازار هدف، قیمت‌گذاری و استراتژی ورود به بازار.",
      icon: <IconChartDots2 stroke={2} />,
    },
    {
      title: "فضای استقرار استارتاپ‌ها",
      description:
        "فراهم‌سازی فضای کاری مناسب برای تیم‌ها به‌منظور تمرکز، تعامل، شبکه‌سازی و رشد در کنار سایر استارتاپ‌ها.",
      icon: <IconBuilding stroke={2} />,
    },
    {
      title: "سرمایه‌گذاری خطرپذیر",
      description:
        "حمایت مالی و راهبردی از استارتاپ‌های مستعد با هدف رشد سریع، مقیاس‌پذیری و حضور مؤثر در بازار.",
      icon: <IconTrendingUp stroke={2} />,
    },
    {
      title: "بازارسازی و توسعه بازار",
      description:
        "طراحی و اجرای استراتژی‌های جذب مشتری، برندسازی و افزایش سهم بازار متناسب با مرحله رشد کسب‌وکار.",
      icon: <IconSpeakerphone stroke={2} />,
    },
    {
      title: "ورود به بازار بین‌المللی",
      description:
        "همراهی تیم‌ها برای آماده‌سازی محصول و استراتژی ورود به بازارهای بین‌المللی با تمرکز بر بازار هدف و کاهش ریسک.",
      icon: <IconCompass stroke={2} />,
    },
  ];

  return (
    <div id="Services" className=" pt-20">
      <h2 className="text-4xl font-bold text-center text-primary">
        خدمات خانه خلاق آینه
      </h2>
      <p className="text-center text-gray-500 text-lg pt-2">
        خلاقیت و تجربه را ترکیب می‌کنیم تا ایده‌هایتان به واقعیت برسد
      </p>
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8 "
      >
        {cards.map((card, idx) => (
          <div key={idx}>
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
