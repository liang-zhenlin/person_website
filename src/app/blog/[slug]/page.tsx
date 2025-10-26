import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <FiArrowLeft className="mr-2" /> 返回博客列表
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          博客文章标题
        </h1>
        <div className="flex items-center text-gray-600 mb-4">
          <time>2024-01-15</time>
          <span className="mx-2">·</span>
          <span>5 分钟阅读</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'React', 'Web开发'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          这是博客文章的内容。在实际应用中，你可以使用 Markdown 或其他格式来编写文章内容。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          当前文章 slug: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">示例标题</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          你可以在这里添加更多的内容，包括代码示例、图片等。
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`const example = () => {
  console.log('Hello, World!');
};`}</code>
        </pre>
      </div>
    </article>
  );
}

