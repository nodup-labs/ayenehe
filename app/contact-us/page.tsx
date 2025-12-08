"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconSend,
  IconMapPinFilled,
} from "@tabler/icons-react";

// Sample branches data
const branches = [
  {
    id: 1,
    name: "شعبه اصلی تهران",
    address: "تهران، خیابان ولیعصر، خیابان شهید بهشتی، پلاک ۲۵",
    phone: "021-88123456",
    email: "tehran@ayenehe.ir",
    hours: "شنبه تا چهارشنبه: ۹ صبح تا ۶ شام",
    city: "تهران",
  },
  {
    id: 2,
    name: "شعبه اصفهان",
    address: "اصفهان، خیابان کاوه، خیابان عباسی، پلاک ۴۵",
    phone: "031-33445566",
    email: "isfahan@ayenehe.ir",
    hours: "شنبه تا چهارشنبه: ۹ صبح تا ۶ شام",
    city: "اصفهان",
  },
  {
    id: 3,
    name: "شعبه شیراز",
    address: "شیراز، خیابان فردوسی، نرسیده به خیابان داراب، پلاک ۶۸",
    phone: "071-37778899",
    email: "shiraz@ayenehe.ir",
    hours: "شنبه تا چهارشنبه: ۹ صبح تا ۶ شام",
    city: "شیراز",
  },
  {
    id: 4,
    name: "شعبه تبریز",
    address: "تبریز، خیابان شهید قندی، خیابان میرزا شیرازی، پلاک ۱۲۰",
    phone: "041-44556677",
    email: "tabriz@ayenehe.ir",
    hours: "شنبه تا چهارشنبه: ۹ صبح تا ۶ شام",
    city: "تبریز",
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary to-secondary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با ما</h1>
          <p className="text-lg opacity-90">
            ما همیشه آماده پاسخگویی به سؤالات و پیشنهادات شما هستیم
          </p>
        </div>
      </section>

      {/* Contact Form & Quick Info */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                فرم تماس
              </h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ✓ پیام شما با موفقیت ارسال شد. ما به زودی با شما تماس خواهیم
                  گرفت.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">
                    نام و نام خانوادگی
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">
                      ایمیل
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">
                      تلفن
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="تلفن خود را وارد کنید"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-semibold">
                    موضوع
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="موضوع پیام خود را وارد کنید"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">
                    پیام
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="پیام خود را اینجا بنویسید..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-32"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <IconSend size={20} />
                  ارسال پیام
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-4">
            {/* Main Contact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                اطلاعات تماس
              </h3>

              <div className="flex items-start gap-4 mb-6">
                <IconPhone
                  size={24}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">تلفن</p>
                  <a
                    href="tel:02188123456"
                    className="text-primary hover:underline"
                  >
                    021-88123456
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <IconMail
                  size={24}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">ایمیل</p>
                  <a
                    href="mailto:info@ayenehe.ir"
                    className="text-primary hover:underline"
                  >
                    info@ayenehe.ir
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <IconMapPin
                  size={24}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">آدرس</p>
                  <p className="text-gray-600 text-sm">
                    تهران، خیابان ولیعصر، خیابان شهید بهشتی، پلاک ۲۵
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <IconClock
                  size={24}
                  className="text-primary mt-1 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800 mb-2">ساعات کاری</p>
                  <p className="text-gray-600 text-sm">
                    شنبه تا چهارشنبه: ۹ صبح تا ۶ شام
                  </p>
                  <p className="text-gray-600 text-sm">پنج‌شنبه و جمعه: تعطیل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            شعبه های ما
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            ما در سراسر کشور شعبه‌های فعالی داریم تا خدمات بهتری را به شما ارائه
            دهیم
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map(branch => (
              <div
                key={branch.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                {/* Branch Name */}
                <div className="flex items-center gap-3 mb-6">
                  <IconMapPinFilled size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    {branch.name}
                  </h3>
                </div>

                {/* Branch Details */}
                <div className="space-y-4">
                  {/* City Badge */}
                  <div className="inline-block bg-primary bg-opacity-10 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {branch.city}
                  </div>

                  {/* Address */}
                  <div className="flex gap-3">
                    <IconMapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{branch.address}</p>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <IconPhone size={20} className="text-primary mt-1 flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-primary hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3">
                    <IconMail size={20} className="text-primary mt-1 flex-shrink-0" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-primary hover:underline"
                    >
                      {branch.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3 pt-2 border-t border-gray-200">
                    <IconClock size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{branch.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          سؤالات متداول
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "مدت زمان پاسخ به درخواست‌ها چقدر است؟",
              answer:
                "معمولاً در مدت ۲۴ ساعت به درخواست‌های شما پاسخ می‌دهیم. برای موارد فوری لطفاً با تلفن تماس بگیرید.",
            },
            {
              question: "آیا از دور با شما کار می‌توانم؟",
              answer:
                "بله، ما انجام کار از راه دور را پشتیبانی می‌کنیم. می‌توانید از طریق ایمیل یا تماس‌های مجازی با ما ارتباط برقرار کنید.",
            },
            {
              question: "قیمت خدمات چگونه تعیین می‌شود؟",
              answer:
                "هر پروژه بر اساس نیاز و محدوده آن قیمت‌گذاری می‌شود. برای دریافت پیشنهاد تخصصی می‌توانید از طریق فرم تماس با ما ارتباط بگیرید.",
            },
            {
              question: "آیا مشاوره رایگان ارائه می‌دهید؟",
              answer:
                "بله، ما برای گرفتن درک بهتر از نیازهایتان، یک جلسه مشاوره رایگان را ارائه می‌دهیم.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  );
}
