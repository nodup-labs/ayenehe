import { IconCertificate, IconHeadset, IconTarget } from "@tabler/icons-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="pt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* چپ - درباره ما */}
        <div dir="rtl" className="order-last md:order-first">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            درباره ما
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            خانه خلاق و نوآوری آینه در چارچوب یک شبکه سلولی نوآوری فعالیت می‌کند
            و با هدف ایجاد هماهنگی، پوشش کشوری و ارائه خدمات یکپارچه طراحی شده
            است. این بستر به‌طور ویژه برای استفاده در ساختارها و مأموریت‌های
            کمیته امداد امام خمینی ایجاد شده و با تکیه بر زیرساخت منسجم و دسترسی
            گسترده، امکان ارائه خدمات مؤثر، هدفمند و قابل توسعه را در سطح کشور
            فراهم می‌کند. در این مسیر، «خانه اخلاق آینه» به‌عنوان تیمی متخصص و
            باتجربه، با بهره‌گیری از خلاقیت، استراتژی و مشاوره حرفه‌ای، به تبدیل
            ایده‌ها به کسب‌وکارهای واقعی و پایدار کمک می‌کند و نقش مؤثری در
            هموارسازی مسیر رشد و توسعه کسب‌وکارها ایفا می‌نماید.
          </p>
          <div className="w-full flex flex-wrap justify-center md:justify-start items-center gap-8 mt-8">
            {/* پشتیبانی */}
            <div className="flex items-center gap-3">
              <IconHeadset size={28} stroke={1.5} className="text-primary" />
              <div className="flex flex-col text-right items-center">
                <span className="text-lg md:text-xl font-bold text-primary">
                  + ۵۰۰
                </span>
                <span className="text-sm text-black">پشتیبانی</span>
              </div>
            </div>

            {/* رضایت مشتری */}
            <div className="flex items-center gap-3">
              <IconCertificate
                size={28}
                stroke={1.5}
                className="text-primary"
              />
              <div className="flex flex-col text-right items-center">
                <span className="text-lg md:text-xl font-bold text-primary">
                  + ۱۰۰
                </span>
                <span className="text-sm text-black">رضایت مشتری</span>
              </div>
            </div>

            {/* پروژه موفق */}
            <div className="flex items-center gap-3">
              <IconTarget size={28} stroke={1.5} className="text-primary" />
              <div className="flex flex-col text-right items-center">
                <span className="text-lg md:text-xl font-bold text-primary">
                  + ۵۰
                </span>
                <span className="text-sm text-black">پروژه موفق</span>
              </div>
            </div>
          </div>
        </div>

        {/* راست - عکس */}
        <div className="flex justify-center order-first md:order-last">
          <Image
            src="/image/about.jpg"
            alt="درباره ما"
            width={800}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto max-w-md md:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
