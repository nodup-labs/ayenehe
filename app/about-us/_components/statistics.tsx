const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">۳۴۸۷</div>
            <p className="text-lg opacity-90">پشتیبانی</p>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">۲۰۰۰</div>
            <p className="text-lg opacity-90">رضایت مشتری</p>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">۱۵۰۰</div>
            <p className="text-lg opacity-90">پروژه موفق</p>
          </div>
          <div className="text-center text-white">
            <div className="text-5xl font-bold mb-2">۵۰۰</div>
            <p className="text-lg opacity-90">کلاینت فعال</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
