import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {post.coverImage && (
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('zh-CN')}</time>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          阅读更多 →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;

