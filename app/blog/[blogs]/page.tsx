import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { getBlogPostById, blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: Promise<{
    blogs: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    blogs: post.id,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { blogs } = await params;
  const post = getBlogPostById(blogs);

  if (!post) {
    return {
      title: 'صفحه پیدا نشد',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { blogs } = await params;
  const post = getBlogPostById(blogs);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter(
    (p) => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Navigation Back */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به وبلاگ
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
              <Tag className="w-4 h-4 inline ml-2" />
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('fa-IR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white p-8 rounded-lg shadow">
            {post.content.split('\n\n').map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.startsWith('-') || paragraph.startsWith('1.') ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {paragraph.split('\n').map((line, lineIndex) => (
                      <li key={lineIndex} className="text-gray-700">
                        {line.replace(/^[-1-4.]\s*\*\*/, '').replace(/\*\*/g, '')}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              مقالات مرتبط
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-40 overflow-hidden bg-gray-200">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="inline-block w-fit px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                        {relatedPost.category}
                      </span>

                      <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-2 flex-grow mb-3">
                        {relatedPost.description}
                      </p>

                      <time className="text-gray-500 text-xs">
                        {new Date(relatedPost.date).toLocaleDateString('fa-IR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
