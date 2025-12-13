const CallAction = () => {
  return (
    <div className=" mb-20  ">
      <div className="bg-gradient-to-r from-secondary via-secondary/90 to-primary/80 rounded-xl p-6 sm:p-8 md:p-12 text-white text-center shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          عضو تیم خلاق آیینه شوید
        </h2>
        <p className="text-base sm:text-lg mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
          اگر دنبال یک تیم پویا، خلاق و متخصص برای شروع کسب‌وکار خود هستید، ما
          آماده‌ایم که کنار شما باشیم.
        </p>
        <button className="w-full sm:inline-block sm:w-auto bg-white text-secondary hover:bg-gray-100 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
          ارتباط با ما
        </button>
      </div>
    </div>
  );
};

export default CallAction;
