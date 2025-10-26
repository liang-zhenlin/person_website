import type { BlogPost, Project } from '@/types';

/**
 * 模拟博客数据
 * 在实际应用中，这些数据可以来自 CMS、Markdown 文件或数据库
 */
export const mockBlogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Next.js 入门指南',
    date: '2024-01-15',
    excerpt: '学习如何使用 Next.js 构建现代化的 React 应用。本文将介绍 Next.js 的核心概念和最佳实践。',
    content: `
# Next.js 入门指南

Next.js 是一个强大的 React 框架，它提供了许多开箱即用的功能...

## 主要特性

- 服务器端渲染 (SSR)
- 静态站点生成 (SSG)
- API 路由
- 文件系统路由

## 开始使用

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`
    `,
    tags: ['Next.js', 'React', 'Web开发'],
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript 最佳实践',
    date: '2024-01-10',
    excerpt: '深入探讨 TypeScript 的类型系统，以及如何在项目中有效使用 TypeScript。',
    content: '# TypeScript 最佳实践\n\nTypeScript 为 JavaScript 添加了静态类型...',
    tags: ['TypeScript', '编程', '最佳实践'],
  },
  {
    slug: 'react-hooks-guide',
    title: 'React Hooks 完全指南',
    date: '2024-01-05',
    excerpt: '全面了解 React Hooks，包括 useState、useEffect、useContext 等常用 Hooks 的使用方法。',
    content: '# React Hooks 完全指南\n\nHooks 是 React 16.8 引入的新特性...',
    tags: ['React', 'Hooks', '前端'],
  },
];

/**
 * 模拟项目数据
 */
export const mockProjects: Project[] = [
  {
    id: '1',
    title: '个人博客系统',
    description: '基于 Next.js 和 TypeScript 构建的现代化博客系统，支持 Markdown 文章编写和标签分类。',
    tags: ['Next.js', 'TypeScript', 'React'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    featured: true,
  },
  {
    id: '2',
    title: '任务管理应用',
    description: '一个功能完善的任务管理应用，支持任务分类、优先级设置和进度跟踪。',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: '天气查询工具',
    description: '实时天气查询工具，支持全球城市天气查询和未来一周天气预报。',
    tags: ['React', 'API', 'CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    featured: false,
  },
  {
    id: '4',
    title: '代码片段管理器',
    description: '用于保存和管理常用代码片段的工具，支持语法高亮和分类管理。',
    tags: ['Next.js', 'MongoDB', 'Node.js'],
    githubUrl: 'https://github.com',
    featured: false,
  },
];

