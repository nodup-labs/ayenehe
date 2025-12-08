'use client';

import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import { getImageWithFallback } from '@/lib/utils';

interface CardBlogProps {
  id?: string;
  category: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

export default function CardBlog({
  id,
  category,
  image,
  title,
  description,
  date,
}: CardBlogProps) {
  return (
    <article dir='rtl' 
      className="rounded-lg  overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white h-full flex flex-col"
      id={id}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-200">
        <Image
          src={getImageWithFallback(image)}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
         
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 text-sm pt-4 border-t border-gray-200">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('fa-IR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
