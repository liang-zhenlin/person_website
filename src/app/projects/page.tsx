import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';

// 模拟项目数据
const projects: Project[] = [
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

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">项目</h1>
        <p className="text-xl text-gray-600">
          这里展示了我的一些个人项目和开源贡献
        </p>
      </div>

      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">精选项目</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">其他项目</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

