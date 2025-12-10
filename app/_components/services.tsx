import {
  IconBulb,
  IconChartDots2,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import Card from "./CardServices";

const Services = () => {
  const cards = [
    {
      title: "تیم‌سازی",
      description:
        "ساخت تیم حرفه‌ای برای کسب‌وکار شما، با هدف ایجاد هماهنگی، افزایش بهره‌وری و رشد پایدار در مسیر موفقیت تجاری.",
      icon: <IconUsers stroke={2} />,
    },

    {
      title: "مشاوره کسب‌وکار",
      description:
        "ارائه راهنمایی حرفه‌ای و مشاوره تخصصی برای تبدیل ایده‌های شما به کسب‌وکارهای واقعی، پایدار و موفق در مسیر رشد و توسعه.",
      icon: <IconBulb stroke={2} />,
    },
    {
      title: "راه‌اندازی استارتاپ",
      description:
        "راه‌اندازی استارتاپ شامل ارائه مشاوره و پشتیبانی حرفه‌ای برای تبدیل ایده‌های نوآورانه شما به کسب‌وکار واقعی، پایدار و موفق در بازار رقابتی است.",
      icon: <IconRocket stroke={2} />,
    },
    {
      title: "رشد و توسعه",
      description:
        "استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
    {
      title: "رشد و توسعه",
      description:
        "استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
    {
      title: "رشد و توسعه",
      description:
        "استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
    {
      title: "رشد و توسعه",
      description:
        "استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
    {
      title: "رشد و توسعه",
      description:
        "استراتژی‌های رشد و بهینه‌سازی کسب‌وکار شامل برنامه‌ریزی حرفه‌ای و تحلیل فرآیندها برای افزایش بهره‌وری و دستیابی به رشد پایدار است.",
      icon: <IconChartDots2 stroke={2} />,
    },
  ];
  return (
    <div id="Services" className=" pt-20 container mx-auto">
      <h2 className="text-4xl font-bold text-center text-primary">
        خدمات خانه خلاق آیینه
      </h2>
      <p className="text-center text-gray-500 text-lg pt-2">
        خلاقیت و تجربه را ترکیب می‌کنیم تا ایده‌هایتان به واقعیت برسد.
      </p>
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8"
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
