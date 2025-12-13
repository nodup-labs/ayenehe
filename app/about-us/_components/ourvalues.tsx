const Ourvalues = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            چرا ما را انتخاب کنید؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ما تنها یک شرکت نیستیم، ما یک شریک موفقیت شما هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">تمرکز</h3>
            <p className="text-gray-600">
              تمام توجه ما بر رسیدن به اهداف شما است
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">خلاقیت</h3>
            <p className="text-gray-600">
              راه‌حل‌های خلاقانه برای چالش‌های پیچیده
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">سرعت</h3>
            <p className="text-gray-600">تحویل سریع و کارآمد بدون تنزل کیفیت</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">شراکت</h3>
            <p className="text-gray-600">
              ارتباط مستمر و پشتیبانی تا پایان پروژه
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
