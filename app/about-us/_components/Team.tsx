const teamMembers = [
  {
    id: 1,
    name: "علی محمدی",
    role: "مدیر پروژه",
    bio: "با تجربه 8 سال در مدیریت پروژه‌های بزرگ",
    image: "/image/team-1.jpg",
  },
  {
    id: 2,
    name: "فاطمه رحیمی",
    role: "طراح UX/UI",
    bio: "خالق تجربه‌های کاربری فوق‌العاده و منحصربه‌فرد",
    image: "/image/team-2.jpg",
  },
  {
    id: 3,
    name: "محمد هاشمی",
    role: "توسعه‌دهنده Full Stack",
    bio: "متخصص در فناوری‌های جدید و معماری نرم‌افزار",
    image: "/image/team-3.jpg",
  },
  {
    id: 4,
    name: "سارا نوری",
    role: "کارشناس بازاریابی",
    bio: "استراتژیست‌ دیجیتال و متخصص رشد کسب‌وکار",
    image: "/image/team-4.jpg",
  },
  {
    id: 5,
    name: "رضا احمدی",
    role: "مشاور استراتژیک",
    bio: "رهبری تیم برای دستیابی به اهداف بزرگ",
    image: "/image/team-5.jpg",
  },
  {
    id: 6,
    name: "نیلا کریمی",
    role: "کارشناس کیفیت",
    bio: "تضمین‌کننده بهترین کیفیت در هر پروژه",
    image: "/image/team-6.jpg",
  },
];
const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">تیم ما</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            افراد خلاقی و متخصصی که به هر پروژه جان می‌بخشند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 bg-gradient-to-b from-primary to-purple-400 flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 rounded-full bg-white bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-44 h-44 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-6xl text-white font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
