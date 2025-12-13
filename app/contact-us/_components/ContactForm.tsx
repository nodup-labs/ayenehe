"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";
import { useState } from "react";

const ContactForm = () => {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">فرم تماس</h2>

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
                  <Label
                    htmlFor="email"
                    className="text-gray-700 font-semibold"
                  >
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
                  <Label
                    htmlFor="phone"
                    className="text-gray-700 font-semibold"
                  >
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
                <Label
                  htmlFor="subject"
                  className="text-gray-700 font-semibold"
                >
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
                <Label
                  htmlFor="message"
                  className="text-gray-700 font-semibold"
                >
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
              <IconMail size={24} className="text-primary mt-1 flex-shrink-0" />
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
  );
};

export default ContactForm;
