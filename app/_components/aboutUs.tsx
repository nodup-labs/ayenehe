import { IconCertificate, IconHeadset, IconTarget } from "@tabler/icons-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="pt-40 container mx-auto">
      <div className="grid grid-cols-2 gap-8 items-center">
        {/* چپ - درباره ما */}
        <div dir="rtl">
          <h2 className="text-4xl font-bold text-primary mb-4">درباره ما</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            خانه خلاق آیینه متشکل از تیم متخصصی است که با تجربه و خلاقیت بالا،
            به شما کمک می‌کند تا ایده‌های شما را به کسب‌وکارهای واقعی و موفق
            تبدیل کنید. ما با ترکیب استراتژی، نوآوری و مشاوره حرفه‌ای، مسیر رشد
            و توسعه کسب‌وکار شما را هموار می‌کنیم. همراه ما باشید تا موفقیت را
            تجربه کنید.
          </p>
          <div className="w-full flex justify-start items-center gap-8 mt-8">
            {/* پشتیبانی */}
            <div className="flex items-center gap-3">
              <IconHeadset size={34} stroke={1.5} className="text-primary" />
              <div className="flex flex-col text-right">
                <span className="text-xl font-bold text-primary">۳۴۸۷</span>
                <span className="text-sm text-black">پشتیبانی</span>
              </div>
            </div>

            {/* رضایت مشتری */}
            <div className="flex items-center gap-3">
              <IconCertificate
                size={34}
                stroke={1.5}
                className="text-primary"
              />
              <div className="flex flex-col text-right">
                <span className="text-xl font-bold text-primary">۲۰۰۰</span>
                <span className="text-sm text-black">رضایت مشتری</span>
              </div>
            </div>

            {/* پروژه موفق */}
            <div className="flex items-center gap-3">
              <IconTarget size={34} stroke={1.5} className="text-primary" />
              <div className="flex flex-col text-right">
                <span className="text-xl font-bold text-primary">۲۰۰۰</span>
                <span className="text-sm text-black">پروژه موفق</span>
              </div>
            </div>
          </div>
        </div>

        {/* راست - عکس */}
        <div className="flex justify-center">
          <Image
            src="/image/about.jpg"
            alt="درباره ما"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
