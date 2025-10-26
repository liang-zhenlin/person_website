import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          你好，我是 <span className="text-blue-600">开发者</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          欢迎来到我的个人网站。在这里，我分享我的技术博客、项目作品和开发经验。
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/blog"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            查看博客 <FiArrowRight className="ml-2" />
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            浏览项目 <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-2">技术博客</h3>
            <p className="text-gray-600">分享前端开发、编程技巧和最佳实践</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">开源项目</h3>
            <p className="text-gray-600">展示个人项目和开源贡献</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">持续学习</h3>
            <p className="text-gray-600">记录学习历程和技术成长</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50 rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">技术栈</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

