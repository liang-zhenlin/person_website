# 快速参考卡片 🚀

## 🏃 立即开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 在浏览器打开
# http://localhost:3000
```

## 📂 关键文件位置

| 文件/目录 | 说明 |
|-----------|------|
| `src/app/page.tsx` | 首页 |
| `src/app/blog/page.tsx` | 博客列表 |
| `src/app/projects/page.tsx` | 项目展示 |
| `src/components/` | 所有组件 |
| `src/data/mock-data.ts` | 博客和项目数据 |
| `src/app/globals.css` | 全局样式 |
| `tailwind.config.ts` | Tailwind 配置 |

## 🎨 快速定制

### 修改网站标题
📁 `src/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: '你的标题',
  description: '你的描述',
};
```

### 修改导航链接
📁 `src/components/Navigation.tsx`
```typescript
const navLinks: NavLink[] = [
  { name: '首页', path: '/' },
  // 添加更多链接...
];
```

### 添加博客文章
📁 `src/data/mock-data.ts`
```typescript
export const mockBlogPosts: BlogPost[] = [
  {
    slug: 'your-post-slug',
    title: '文章标题',
    date: '2024-01-15',
    excerpt: '摘要...',
    content: '内容...',
    tags: ['标签1', '标签2'],
  },
];
```

### 添加项目
📁 `src/data/mock-data.ts`
```typescript
export const mockProjects: Project[] = [
  {
    id: '1',
    title: '项目名称',
    description: '项目描述',
    tags: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    demoUrl: 'https://demo.com',
    featured: true, // 是否显示在精选区域
  },
];
```

## 🔧 常用命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 📦 部署

### Vercel (推荐)
1. 推送代码到 GitHub
2. 在 vercel.com 导入项目
3. 一键部署 ✅

### Netlify
```bash
npm run build
# 部署 .next 目录
```

## 🎯 页面路由

| 路由 | 页面 |
|------|------|
| `/` | 首页 |
| `/blog` | 博客列表 |
| `/blog/[slug]` | 博客详情 |
| `/projects` | 项目展示 |
| `/about` | 关于页面 |

## 🎨 技术栈

- ⚛️ React 18
- 📘 TypeScript
- ⚡ Next.js 14
- 🎨 Tailwind CSS
- 🎭 React Icons

## 📚 更多文档

- 📖 [README.md](./README.md) - 项目介绍
- 🚀 [GETTING_STARTED.md](./GETTING_STARTED.md) - 详细指南
- 📊 [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - 项目总结

## 💡 提示

- 所有页面都是响应式的
- 使用 TypeScript 保证类型安全
- 组件已经优化，可直接使用
- 样式使用 Tailwind CSS，易于定制

## 🆘 遇到问题？

1. 确保 Node.js 版本 >= 18
2. 删除 `node_modules` 和 `package-lock.json`，重新安装
3. 检查 [Next.js 文档](https://nextjs.org/docs)
4. 查看浏览器控制台错误信息

---

**Happy Coding! 🎉**

