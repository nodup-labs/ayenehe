import Link from "next/link";
import Image from "next/image";
import React from "react";

interface RelatedPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export default function BlogRelatedPosts({
  relatedPosts,
}: {
  relatedPosts: RelatedPost[];
}) {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">مقالات مرتبط</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((relatedPost) => (
          <Link
            key={relatedPost.id}
            href={`/blog/${relatedPost.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="relative w-full h-40 overflow-hidden bg-gray-200">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

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
                  {new Date(relatedPost.date).toLocaleDateString("fa-IR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
