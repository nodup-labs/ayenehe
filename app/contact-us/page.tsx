"use client";

import Branches from "./_components/Branches";
import ContactForm from "./_components/ContactForm";
import Faq from "./_components/Faq";

export default function ContactUsPage() {
  return (
    <main dir="rtl" className="container mx-auto px-4 sm:px-6 bg-gray-50 pt-24">
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
      <ContactForm />

      {/* Branches Section */}
      <Branches />

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
    </main>
  );
}
