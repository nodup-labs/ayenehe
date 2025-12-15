import Image from "next/image";
import { Calendar, Tag } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  image: string;
}

const BlogHeader = ({ post }: { post: BlogPost }) => {
  return (
    <>
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
              {new Date(post.date).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </header>

      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
};

export default BlogHeader;
