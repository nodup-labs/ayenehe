import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div
      className="
        w-full rounded-lg mt-4 
        flex flex-col items-center justify-center 
        bg-[url(/image/Herosection.jpg)] bg-cover bg-center bg-no-repeat
        px-4 py-24 md:py-40
        text-white text-center
      "
    >
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        پشتیبان کارآفرینان آینده
      </h1>

      {/* SUBTEXT */}
      <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
        ایینه در مسیر کارآفرینی شما همراه شماست. ایده‌ها و طرح‌های خود را با ما به اشتراک بگذارید و مسیر رشد کسب‌وکار خود را آغاز کنید.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <Button variant="default" size="lg">
          ارسال ایده‌های شما
        </Button>
      </div>
    </div>
  );
}
