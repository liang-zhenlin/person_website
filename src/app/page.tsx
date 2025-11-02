import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiRss } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                你好! 我是<span className="text-blue-600">Lucas</span> 👋
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                在这里我会分享各类技术栈所遇到问题与解决方案,带你了解最新的技术栈以及实际开发中如何应用,并希望我的开发经历对你有所启发。
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                aria-label="Twitter"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="https://discord.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                aria-label="Discord"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
              <a
                href="/rss"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                aria-label="RSS"
              >
                <FiRss size={24} />
              </a>
              <a
                href="https://gitee.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
                aria-label="Gitee"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 7.5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5zm-13 0c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                自我介绍
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Person Illustration */}
              <div className="relative">
                {/* Person figure */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  {/* Head */}
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                  {/* Body */}
                  <div className="w-20 h-32 bg-gray-800 rounded-t-lg"></div>
                  {/* Arms */}
                  <div className="absolute -left-4 top-8 w-6 h-16 bg-gray-800 rounded-full"></div>
                  <div className="absolute -right-4 top-8 w-6 h-16 bg-gray-800 rounded-full"></div>
                </div>

                {/* Desk */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-600 rounded-lg"></div>

                {/* Monitor */}
                <div className="absolute bottom-8 left-8 w-32 h-20 bg-gray-700 rounded-lg">
                  <div className="absolute top-1 left-1 right-1 bottom-1 bg-gray-900 rounded">
                    {/* Browser window */}
                    <div className="flex items-center space-x-1 p-2 border-b border-gray-600">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-2">
                      <div className="w-8 h-6 bg-blue-500 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                        <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                        <div className="h-1 bg-gray-600 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop */}
                <div className="absolute bottom-8 right-8 w-24 h-16 bg-gray-800 rounded-lg">
                  <div className="absolute top-1 left-1 right-1 bottom-1 bg-blue-600 rounded">
                    {/* Code lines */}
                    <div className="p-2 space-y-1">
                      <div className="h-1 bg-white rounded w-full"></div>
                      <div className="h-1 bg-white rounded w-3/4"></div>
                      <div className="h-1 bg-white rounded w-5/6"></div>
                      <div className="h-1 bg-white rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
}





