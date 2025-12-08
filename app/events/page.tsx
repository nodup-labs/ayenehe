'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import EventCard from '../_components/eventCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, MapPin, Tag } from 'lucide-react';
import { events } from '@/lib/eventData';


const categories = ['همه', 'وبینار', 'کارگاه', 'همایش', 'دوره آموزشی'];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [showFilters, setShowFilters] = useState(false);

  // فیلتر کردن رویدادها
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'همه' || event.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* هدر صفحه */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">رویدادها</h1>
          <p className="text-lg text-gray-600">بهترین رویدادها و سمینارها را کاوش کنید</p>
        </div>

        {/* نوار جستجو و فیلتر */}
        <div className="mb-8 space-y-4">
          {/* نوار جستجو */}
          <div className="relative">
            <Search className="absolute right-4 top-3 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="جستجو در رویدادها..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-3 text-right"
            />
          </div>

          {/* دکمه نمایش فیلترها */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <Filter size={20} />
            {showFilters ? 'مخفی کردن فیلترها' : 'نمایش فیلترها'}
          </button>

          {/* فیلترها */}
          {showFilters && (
            <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Tag size={18} />
                  دسته‌بندی
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* نتیجه جستجو */}
        {filteredEvents.length > 0 ? (
          <>
            <div className="mb-6 text-gray-700">
              <span className="font-semibold">{filteredEvents.length}</span> رویداد یافت شد
            </div>

            {/* شبکه کارت‌ها */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="h-full cursor-pointer transform transition-transform hover:scale-105">
                    <EventCard
                      image={event.image}
                      title={event.title}
                      description={event.description}
                      price={event.price}
                      location={event.location}
                      category={event.category}
                      date={event.date}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Calendar size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">رویدادی یافت نشد</h3>
            <p className="text-gray-500 mb-6">
              متأسفانه هیچ رویدادی با این شرایط موجود نیست
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('همه');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              حذف فیلترها
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
