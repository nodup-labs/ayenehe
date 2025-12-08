import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div dir="" className=" container rounded-lg mt-4 flex flex-col items-center justify-center py-60 px-4 md:px-0 bg-[url(/image/Herosection.jpg)] bg-cover bg-center">
      <h1 className="text-5xl py-8 text-white font-bold text-center">
       پشتیبان کارآفرینان آینده
      </h1>
      <p className="text-center pb-8 text-white text-lg">
       ایینه در مسیر کارآفرینی شما همراه شماست. ایده‌ها و طرح‌های خود را با ما به اشتراک بگذارید و مسیر رشد کسب‌وکار خود را آغاز کنید.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Button variant={"default"} size={"xl"}>ارسال ایده‌های شما</Button>

      </div>
    </div>
  );
}   