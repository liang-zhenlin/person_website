import React from 'react';
import BlogCard from '@/components/BlogCard';
import type { BlogPost } from '@/types';

// 模拟博客数据
const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Next.js 入门指南',
    date: '2024-01-15',
    excerpt: '学习如何使用 Next.js 构建现代化的 React 应用。本文将介绍 Next.js 的核心概念和最佳实践。',
    content: '',
    tags: ['Next.js', 'React', 'Web开发'],
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript 最佳实践',
    date: '2024-01-10',
    excerpt: '深入探讨 TypeScript 的类型系统，以及如何在项目中有效使用 TypeScript。',
    content: '',
    tags: ['TypeScript', '编程', '最佳实践'],
  },
  {
    slug: 'react-hooks-guide',
    title: 'React Hooks 完全指南',
    date: '2024-01-05',
    excerpt: '全面了解 React Hooks，包括 useState、useEffect、useContext 等常用 Hooks 的使用方法。',
    content: '',
    tags: ['React', 'Hooks', '前端'],
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS 实用技巧',
    date: '2023-12-28',
    excerpt: '分享一些 Tailwind CSS 的实用技巧，帮助你更高效地编写样式代码。',
    content: '',
    tags: ['CSS', 'Tailwind', '设计'],
  },
];

export default function BlogPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">博客</h1>
        <p className="text-xl text-gray-600">
          分享我的技术见解、开发经验和学习笔记
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

