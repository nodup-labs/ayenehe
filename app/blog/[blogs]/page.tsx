import { blogPosts, getBlogPostById } from "@/lib/blogData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from "./_components/BlogContent";
import BlogHeader from "./_components/BlogHeader";
import BlogRelatedPosts from "./_components/BlogRelatedPosts";

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
      title: "صفحه پیدا نشد",
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
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 sm:px-6 bg-gray-50" dir="rtl">
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
      <article className="max-w-7xl mx-auto px-4 py-12">
        {/* Header + Featured Image */}
        <BlogHeader post={post} />

        {/* Content */}
        <BlogContent content={post.content} />

        {/* Related Posts */}
        <BlogRelatedPosts relatedPosts={relatedPosts} />
      </article>
    </div>
  );
}
