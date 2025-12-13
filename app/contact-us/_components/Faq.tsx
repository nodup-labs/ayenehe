const Faq = () => {
  return (
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
  );
};

export default Faq;
