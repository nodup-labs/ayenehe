import Image from 'next/image';
import { MapPin, Tag, DollarSign, Calendar } from 'lucide-react';
import { getImageWithFallback } from '@/lib/utils';

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  price?: number | 'free';
  location: string;
  category: string;
  date?: string;
}

export default function EventCard({
  image,
  title,
  description,
  price,
  location,
  category,
  date,
}: EventCardProps) {
  // محدود کردن توضیحات به 100 کاراکتر
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + '...'
      : description;

  // فرمت قیمت
  const priceDisplay =
    price === 'free' ? 'رایگان' : price ? `${price.toLocaleString()} تومان` : 'نامشخص';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* تصویر */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-200">
        <Image
          src={getImageWithFallback(image)}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* محتوای کارت */}
      <div className="p-4">
        {/* عنوان */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* توضیحات */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {truncatedDescription}
        </p>

        {/* دسته‌بندی */}
        <div className="flex items-center gap-2 mb-3">
          <Tag size={16} className="text-blue-500" />
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* موقعیت مکانی */}
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
          <MapPin size={16} className="text-red-500 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* قیمت */}
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold">
          <DollarSign size={16} className="text-green-500" />
          <span className="text-green-700">{priceDisplay}</span>
        </div>

        {/* تاریخ (اختیاری) */}
        {date && (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Calendar size={16} className="text-orange-500" />
            <span>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
}
