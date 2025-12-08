export interface Event {
  id: string;
  category: string;
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  content: string;
}

export const events: Event[] = [
  {
    id: "1",
    category: "وبینار",
    image: "/image/Herosection.jpg",
    title: "وبینار توسعه وب حرفه‌ای",
    description: "یادگیری روز‌آمد‌ترین تکنولوژی‌های توسعه وب از متخصصین صنعت",
    date: "2025-12-15",
    time: "19:00",
    location: "آنلاین",
    content: `این وبینار به بررسی توسعه وب مدرن می‌پردازد. شما در این جلسه با:
    
- تکنولوژی‌های جدید توسعه فرانت‌اند
- بهترین روش‌های کدنویسی
- طراحی سیستم‌های مقیاس‌پذیر

آشنا خواهید شد. متخصصین تجربی‌کار از شرکت‌های بزرگ آن‌لاین حضور دارند.`,
  },
  {
    id: "2",
    category: "کارگاه",
    image: "/image/about.jpg",
    title: "کارگاه طراحی UI/UX",
    description:
      "یادگیری عملی طراحی واسط کاربری و تجربه کاربر با استفاده از ابزارهای صنعتی",
    date: "2025-12-20",
    time: "14:00",
    location: "تهران - خیابان ولیعصر",
    content: `کارگاه ۲ روزه‌ی طراحی UI/UX برای افرادی که می‌خواهند مهارت خود را ارتقا دهند.

برنامه:
- روز اول: اصول طراحی و روانشناسی کاربر
- روز دوم: عملی با ابزارهای Figma و Adobe XD
- حل مسئله و طراحی پروژه‌ی واقعی

حضور در این کارگاه محدود است و فقط برای ۲۰ نفر.`,
  },
  {
    id: "3",
    category: "همایش",
    image: "/image/cover-3.webp",
    title: "همایش فناوری و استارتاپ‌های ایران",
    description:
      "گردهمایی مؤسسان، سرمایه‌گذاران و متخصصین فناوری برای معرفی فناوری‌های جدید",
    date: "2025-12-25",
    time: "09:00",
    location: "تهران - مرکز کنفرانس‌های بین‌المللی",
    content: `همایش سالانه‌ی فناوری و استارتاپ‌های ایران برگزار می‌شود. در این رویداد:

- نمایش محصولات ۵۰+ استارتاپ
- سخنرانی‌های الهام‌بخش
- فرصت‌های شبکه‌سازی
- جلسات یک‌به‌یک با سرمایه‌گذاران

این است بهترین فرصت برای آشنایی با آخرین فناوری‌های ایران.`,
  },
  {
    id: "4",
    category: "دوره آموزشی",
    image: "/image/cube.png",
    title: "دوره ۱۲ هفته‌ای برنامه‌نویسی React",
    description:
      "آموزش جامع React از سطح مقدماتی تا پیشرفته برای ایجاد اپلیکیشن‌های تعاملی",
    date: "2025-12-30",
    time: "16:00",
    location: "آنلاین + حضوری (تهران)",
    content: `دوره شامل:

✓ بنیادی‌های JavaScript و ES6+
✓ Hooks و State Management
✓ Routing و API Integration
✓ Testing و Deployment
✓ پروژه‌های عملی هر هفته

سرتیفیکه و دعوت‌نامه برای بهترین شاگردان برای مصاحبه‌های شغلی.`,
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter((event) => event.category === category);
}
