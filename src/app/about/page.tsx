import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">关于我</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            头像
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">你好！</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              我是一名热爱技术的前端开发者，专注于 React、TypeScript 和现代 Web 开发技术。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              我喜欢学习新技术，分享开发经验，并通过开源项目为社区做贡献。
            </p>
            <p className="text-gray-600 leading-relaxed">
              在业余时间，我喜欢写技术博客、参与开源项目，以及探索新的编程技术和工具。
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">技能</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">前端开发</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React / Next.js</li>
                <li>• TypeScript / JavaScript</li>
                <li>• HTML5 / CSS3</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">工具与其他</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Git / GitHub</li>
                <li>• VS Code</li>
                <li>• Node.js</li>
                <li>• RESTful API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">联系方式</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">欢迎通过以下方式与我联系：</p>
          <div className="space-y-3">
            <a
              href="mailto:your@email.com"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FiMail className="mr-3" size={20} />
              your@email.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FiGithub className="mr-3" size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FiLinkedin className="mr-3" size={20} />
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FiTwitter className="mr-3" size={20} />
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

