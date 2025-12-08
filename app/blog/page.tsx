import Link from 'next/link';

import { blogPosts } from '@/lib/blogData';
import CardBlog from '../_components/CardBlog';

export const metadata = {
  title: 'وبلاگ',
  description: 'لیست کامل اخبار و مقالات وبلاگ',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">وبلاگ</h1>
          <p className="text-xl text-gray-600">
            آخرین اخبار و مقالات درباره تکنولوژی و توسعه وب
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="hover:no-underline"
            >
              <CardBlog
                id={post.id}
                category={post.category}
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">هیچ مقاله‌ای موجود نیست.</p>
          </div>
        )}
      </div>
    </div>
  );
}
