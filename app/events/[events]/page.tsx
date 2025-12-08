'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  Clock,
  MapPin,
  Tag,
  DollarSign,
  Users,
  ChevronLeft,
  Share2,
  Heart,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';

interface EventDetails {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  price: number | 'free';
  location: string;
  category: string;
  date: string;
  time: string;
  capacity: number;
  registered: number;
  speaker?: string;
  highlights: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
  requirements?: string[];
}

// نمونه داده‌های تفصیلی رویدادها
const eventsDetailsData: Record<string, EventDetails> = {
  '1': {
    id: '1',
    title: 'سمینار دیجیتال مارکتینگ',
    description: 'سمینار جامع درباره تکنیک‌های جدید دیجیتال مارکتینگ',
    longDescription: `این سمینار فشرده شامل بررسی تمامی جنبه‌های دیجیتال مارکتینگ می‌باشد. در این سمینار شما با:
    
- استراتژی‌های بازاریابی دیجیتال آشنا می‌شوید
- یادگیری مهارت‌های عملی SEO و SEM
- کار با شبکه‌های اجتماعی برای تبلیغات
- تجزیه و تحلیل داده‌ها و متریک‌های مهم
- کیس استادی‌های واقعی از شرکت‌های موفق

این سمینار ایده‌آل برای کارآفرینان، متخصصین بازاریابی و هر کسی که می‌خواهد کسب و کارش را آنلاین توسعه دهد.`,
    image: '/image/cover-3.webp',
    price: 250000,
    location: 'تهران - سالن آریا',
    category: 'بیزنس',
    date: '۱۴۰۴/۰۱/۲۵',
    time: '۹:۳۰ - ۱۲:۳۰',
    capacity: 100,
    registered: 75,
    speaker: 'علی محمدی - متخصص دیجیتال مارکتینگ',
    highlights: [
      'آموزش توسط بهترین متخصصان',
      'سرتیفیکت معتبر پس از اتمام',
      'بسته یادداشت‌های جامع',
      'دسترسی به ویدیوهای آموزشی',
      'پشتیبانی مادام‌العمر',
    ],
    schedule: [
      { time: '۹:۳۰', activity: 'ثبت‌نام و قهوه خوری' },
      { time: '۱۰:۰۰', activity: 'بنیان‌های دیجیتال مارکتینگ' },
      { time: '۱۰:۳۰', activity: 'SEO و بهینه‌سازی موتور جستجو' },
      { time: '۱۱:۳۰', activity: 'ویژگی‌های تبلیغات شبکه‌های اجتماعی' },
      { time: '۱۲:۱۵', activity: 'پرسش و پاسخ' },
      { time: '۱۲:۳۰', activity: 'پایان سمینار' },
    ],
    requirements: [
      'دانش پایه‌ای از اینترنت و شبکه‌های اجتماعی',
      'لپ‌تاپ یا رایانه‌ای برای تمرین عملی',
      'یادداشت‌برداری ابزارها',
    ],
  },
  '2': {
    id: '2',
    title: 'کارگاه برنامه‌نویسی Python',
    description: 'آموزش عملی زبان برنامه‌نویسی Python',
    longDescription: `کارگاه Python این یک دوره جامع برای یادگیری یکی از محبوب‌ترین زبان‌های برنامه‌نویسی جهان است.

محتوای کارگاه:
- مبانی برنامه‌نویسی و Python
- متغیرها، انواع داده‌ها و عملیات
- ساختار کنترلی و حلقه‌ها
- توابع و ماژول‌ها
- کار با فایل‌ها و پایگاه داده‌ها
- پروژه‌های عملی و واقعی

این کارگاه برای مبتدیانی که هیچ تجربه‌ای ندارند و همچنین برای افرادی که می‌خواهند مهارت‌های خود را بهتر کنند مناسب است.`,
    image: '/image/cover-3.webp',
    price: 150000,
    location: 'تهران - ساختمان دریا',
    category: 'آموزش فنی',
    date: '۱۴۰۴/۰۱/۳۰',
    time: '۱۴:۰۰ - ۱۷:۰۰',
    capacity: 50,
    registered: 45,
    speaker: 'محمد حسن‌پور - برنامه‌نویس ارشد',
    highlights: [
      'آموزش عملی و تمرین زیاد',
      'سرتیفیکت رسمی',
      'دسترسی دائم به منابع کارگاه',
      'کوئری‌های رایگان پس از کارگاه',
      'بسته‌ای شامل کد‌های آماده',
    ],
    schedule: [
      { time: '۱۴:۰۰', activity: 'ورود و معرفی' },
      { time: '۱۴:۱۵', activity: 'مبانی Python و محیط کاری' },
      { time: '۱۵:۰۰', activity: 'تمرین عملی اول' },
      { time: '۱۵:۳۰', activity: 'استراتژی‌های قدرتمند' },
      { time: '۱۶:۳۰', activity: 'پروژه نهایی' },
      { time: '۱۷:۰۰', activity: 'پایان کارگاه' },
    ],
    requirements: [
      'لپ‌تاپ با Python نصب شده',
      'ویرایشگر کد (VS Code توصیه می‌شود)',
      'دانش پایه‌ای از ریاضی',
    ],
  },
  '3': {
    id: '3',
    title: 'نیتورکینگ کارآفرینان',
    description: 'فرصتی برای شبکه‌سازی بین کارآفرینان',
    longDescription: `این رویداد نیتورکینگ فرصتی عالی برای کارآفرینان، سرمایه‌گذاران و متخصصین کسب و کار است.

شما در این رویداد خواهید:
- ملاقات با سرمایه‌گذاران و تامین‌کنندگان سرمایه
- شبکه‌سازی با کارآفرینان دیگر
- تبادل ایده‌ها و تجربیات
- یافتن شراکت‌های احتمالی
- مشاهده استارتاپ‌های نوپا
- دریافت نسخه‌های تجارتی

این رویداد بسیار مناسب برای کسانی است که دنبال تامین‌کننده سرمایه یا شراکت هستند.`,
    image: '/image/cover-3.webp',
    price: 'free',
    location: 'تهران - هتل استقلال',
    category: 'شبکه‌سازی',
    date: '۱۴۰۴/۰۲/۱۰',
    time: '۱۸:۰۰ - ۲۰:۰۰',
    capacity: 200,
    registered: 120,
    speaker: 'تیم سازمان‌دهنده',
    highlights: [
      'شبکه‌سازی غیرفروش‌گرایانه',
      'ملاقات با متخصصین موفق',
      'مشروبات و غذایی رایگان',
      'محیط راحت و دوستانه',
      'فرصت‌های سرمایه‌گذاری',
    ],
    schedule: [
      { time: '۱۸:۰۰', activity: 'پذیرایی و قهوه' },
      { time: '۱۸:۳۰', activity: 'سخنرانی کوتاه توسط سرمایه‌گذار' },
      { time: '۱۹:۰۰', activity: 'شبکه‌سازی آزاد' },
      { time: '۱۹:۳۰', activity: 'معرفی استارتاپ‌های نوپا' },
      { time: '۲۰:۰۰', activity: 'پایان رویداد' },
    ],
  },
  '4': {
    id: '4',
    title: 'کنفرانس فناوری و نوآوری',
    description: 'بررسی آخرین تکنولوژی‌ها و ایده‌های نو',
    longDescription: `یک کنفرانس جامع برای بررسی آخرین روند‌های فناوری و نوآوری در دنیا.

سرفصل‌های اصلی:
- هوش‌مصنوعی و یادگیری ماشین
- بلاک‌چین و رمزارزها
- اینترنت اشیا (IoT)
- رایانش ابری
- سایبرسیکیوریتی
- فناوری‌های نوظهور

برنامه‌ریزی برای دو روز شامل سخنرانی‌های فنی، نمایش‌های عملی و جلسات مناظره است.`,
    image: '/image/cover-3.webp',
    price: 350000,
    location: 'تهران - برج میلاد',
    category: 'فناوری',
    date: '۱۴۰۴/۰۲/۲۰',
    time: '۱۰:۰۰ - ۱۶:۰۰',
    capacity: 300,
    registered: 250,
    speaker: 'سخنرانان مختلف',
    highlights: [
      'سخنرانان بین‌المللی',
      'نمایش‌های زنده فناوری',
      'بوثهای شرکت‌های بزرگ',
      'سرتیفیکت معتبر',
      'ناهار و پذیرایی رایگان',
    ],
    schedule: [
      { time: '۱۰:۰۰', activity: 'ثبت‌نام و ورود' },
      { time: '۱۰:۳۰', activity: 'سخنرانی کلیدی: آینده فناوری' },
      { time: '۱۱:۳۰', activity: 'جلسه‌های موازی (بخش اول)' },
      { time: '۱۲:۳۰', activity: 'ناهار' },
      { time: '۱۳:۳۰', activity: 'جلسه‌های موازی (بخش دوم)' },
      { time: '۱۴:۳۰', activity: 'نمایش‌های فناوری' },
      { time: '۱۶:۰۰', activity: 'پایان کنفرانس' },
    ],
  },
  '5': {
    id: '5',
    title: 'ورکشاپ طراحی UI/UX',
    description: 'آموزش اصول و روش‌های طراحی',
    longDescription: `یک ورکشاپ عملی و جامع برای یادگیری اصول طراحی رابط کاربری (UI) و تجربه کاربر (UX).

مواد تدریس:
- مبانی UI/UX و فلسفه آن
- تحقیق کاربر و تجزیه‌و‌تحلیل
- ساختار‌بندی و راهنمایی
- طراحی وایرفریم و پروتوتایپ
- اصول رنگ و تایپوگرافی
- طراحی واکنش‌گرای وب
- تست‌کردن و بهبود

شرکت‌کنندگان پروژه‌های عملی انجام خواهند داد.`,
    image: '/image/cover-3.webp',
    price: 200000,
    location: 'تهران - مرکز طراحی',
    category: 'طراحی',
    date: '۱۴۰۴/۰۲/۲۵',
    time: '۱۳:۰۰ - ۱۶:۰۰',
    capacity: 60,
    registered: 55,
    speaker: 'سارا رسولی - طراح UI/UX',
    highlights: [
      'استفاده از ابزارهای صنعتی',
      'پروژه‌های عملی پرتولیو‌ای',
      'بازخورد شخصی از استاد',
      'فایل‌های آماده استفاده',
      'جامعه خودیار طراحان',
    ],
    schedule: [
      { time: '۱۳:۰۰', activity: 'مقدمه و استرم‌برین' },
      { time: '۱۳:۳۰', activity: 'اصول طراحی UI/UX' },
      { time: '۱۴:۳۰', activity: 'تمرین عملی: طراحی وایرفریم' },
      { time: '۱۵:۳۰', activity: 'نوتشرح پروتوتایپینگ' },
      { time: '۱۶:۰۰', activity: 'پایان ورکشاپ' },
    ],
  },
  '6': {
    id: '6',
    title: 'سخنرانی درباره استارتاپ‌های موفق',
    description: 'یادگیری از تجربیات بنیان‌گذاران',
    longDescription: `سخنرانی الهام‌بخش درباره داستان موفقیت استارتاپ‌های معروف و آموزن‌های پیدا شده از آن.

در این سخنرانی:
- داستان بنیان‌گذاران و ایده‌های ابتدایی
- چالش‌های رویرو شده و حل آنها
- تمویل و دریافت سرمایه
- رشد و مقیاس‌بندی تیم
- اشتباهات و درس‌های یاد‌گرفته شده
- نکات برای شروع استارتاپ خود

یک فرصت بزرگ برای رویاپردازی و یادگیری از بهترین‌ها!`,
    image: '/image/cover-3.webp',
    price: 'free',
    location: 'آنلاین',
    category: 'کسب و کار',
    date: '۱۴۰۴/۰۳/۰۵',
    time: '۲۰:۰۰ - ۲۱:۳۰',
    capacity: 500,
    registered: 340,
    speaker: 'بنیان‌گذاران استارتاپ‌های معروف',
    highlights: [
      'سخنرانی رایگان',
      'جلسه سؤال و پاسخ',
      'شبکه‌سازی با بنیان‌گذاران',
      'ضبط و دسترسی بعدی',
      'منابع و ابزار رایگان',
    ],
    schedule: [
      { time: '۲۰:۰۰', activity: 'ورود و فناوری تست' },
      { time: '۲۰:۱۰', activity: 'سخنرانی اول' },
      { time: '۲۰:۴۵', activity: 'سخنرانی دوم' },
      { time: '۲۱:۱۵', activity: 'جلسه سؤال و پاسخ' },
      { time: '۲۱:۳۰', activity: 'پایان سخنرانی' },
    ],
  },
};

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.events as string;

  const event = eventsDetailsData[eventId];
  const [isRegistered, setIsRegistered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!event) {
    return (
      <div dir="rtl" className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">رویداد یافت نشد</h1>
          <Link href="/events" className="text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2">
            <ChevronLeft size={20} />
            بازگشت به لیست رویدادها
          </Link>
        </div>
      </div>
    );
  }

  const priceDisplay =
    event.price === 'free' ? 'رایگان' : `${event.price.toLocaleString()} تومان`;
  const registrationPercentage = (event.registered / event.capacity) * 100;
  const remainingSpots = event.capacity - event.registered;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* دکمه بازگشت */}
        <Link
          href="/events"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-semibold"
        >
          <ChevronLeft size={20} />
          بازگشت به رویدادها
        </Link>

        {/* تصویر رویداد */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* اطلاعات روی تصویر */}
          <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            {event.speaker && (
              <p className="flex items-center gap-2 text-lg">
                <Users size={20} />
                {event.speaker}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* محتوای اصلی */}
          <div className="lg:col-span-2">
            {/* توضیحات کامل */}
            <section className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">توضیحات کامل</h2>
              <div className="text-gray-700 space-y-3 text-justify leading-8">
                {event.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* نقاط برجسته */}
            <section className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle size={24} className="text-green-600" />
                نقاط برجسته
              </h2>
              <ul className="space-y-3">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700 text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* برنامه رویداد */}
            <section className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar size={24} className="text-blue-600" />
                برنامه رویداد
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
                    <div className="flex-shrink-0">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 text-lg">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* الزامات */}
            {event.requirements && event.requirements.length > 0 && (
              <section className="bg-blue-50 rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">الزامات</h2>
                <ul className="space-y-2">
                  {event.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* سایدبار */}
          <div className="lg:col-span-1">
            {/* کارت اطلاعات */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-32 space-y-6">
              {/* قیمت */}
              <div>
                <p className="text-gray-600 text-sm mb-2">قیمت</p>
                <p className="text-3xl font-bold text-green-600">{priceDisplay}</p>
              </div>

              {/* تاریخ و ساعت */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">تاریخ</p>
                    <p className="text-gray-900 font-semibold">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">ساعت</p>
                    <p className="text-gray-900 font-semibold">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-600 text-sm">مکان</p>
                    <p className="text-gray-900 font-semibold">{event.location}</p>
                  </div>
                </div>
              </div>

              {/* نوار ظرفیت */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600 text-sm">ظرفیت</p>
                  <p className="text-sm text-gray-700 font-semibold">
                    {event.registered} / {event.capacity}
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${registrationPercentage}%` }}
                  />
                </div>
                {remainingSpots > 0 ? (
                  <p className="text-xs text-green-600 mt-2 font-semibold">
                    {remainingSpots} صندلی باقی مانده
                  </p>
                ) : (
                  <p className="text-xs text-red-600 mt-2 font-semibold">
                    ظرفیت تمام شده
                  </p>
                )}
              </div>

              {/* دکمه‌های عملیات */}
              <div className="space-y-3 pt-4 border-t">
                <Button
                  onClick={() => setIsRegistered(!isRegistered)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                  disabled={remainingSpots === 0 && !isRegistered}
                >
                  {isRegistered ? 'لغو ثبت‌نام' : 'ثبت‌نام رویداد'}
                </Button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Heart
                      size={20}
                      className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                    />
                  </button>

                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* پیام ثبت‌نام */}
              {isRegistered && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ شما با موفقیت ثبت‌نام شدید
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
