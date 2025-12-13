import {
  IconClock,
  IconMail,
  IconMapPin,
  IconMapPinFilled,
  IconPhone,
} from "@tabler/icons-react";
const Branches = () => {
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
  return (
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
          {branches.map((branch) => (
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
                  <IconMapPin
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-700">{branch.address}</p>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <IconPhone
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-primary hover:underline"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <IconMail
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <a
                    href={`mailto:${branch.email}`}
                    className="text-primary hover:underline"
                  >
                    {branch.email}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex gap-3 pt-2 border-t border-gray-200">
                  <IconClock
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-600 text-sm">{branch.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
