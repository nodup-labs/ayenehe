import CardBlog from "./CardBlog";

const Blogs = () => {
  const blogs = [
    {
      category: "توسعه وب",
      image: "/image/cover-3.webp",
      title: "مبتدی‌ترین راهنمای شروع توسعه وب",
      description:
        "یادگیری اصول پایه‌ای توسعه وب و ساخت سایت‌های حرفه‌ای با تکنولوژی‌های مدرن",
      date: "2025-12-07",
    },
    {
      category: "طراحی UI/UX",
      image: "/image/cover-3.webp",
      title: "اصول طراحی رابط کاربری جذاب",
      description:
        "یادگیری اصول طراحی UI/UX برای ایجاد تجربه کاربری بهتر و طراحی‌های زیبا",
      date: "2025-12-06",
    },
    {
      category: "استراتژی کسب‌وکار",
      image: "/image/cover-3.webp",
      title: "چگونه استارتاپ خود را رشد دهید",
      description: "استراتژی‌های اثربخش برای رشد سریع استارتاپ و افزایش درآمد",
      date: "2025-12-05",
    },
    {
      category: "بازاریابی دیجیتال",
      image: "/image/cover-3.webp",
      title: "تکنیک‌های بازاریابی دیجیتال موثر",
      description:
        "یادگیری روش‌های بازاریابی دیجیتال برای افزایش فروش و مشتریان",
      date: "2025-12-04",
    },
  ];
  return (
    <div dir="rtl" className="grid grid-cols-4 gap-4 pt-8">
      {blogs.map((blog, idx) => (
        <div key={idx}>
          <CardBlog
            category={blog.category}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        </div>
      ))}
    </div>
  );
};
export default Blogs;
