# 个人网站

这是一个基于 Next.js + TypeScript + React 构建的现代化个人网站，包含博客和项目展示功能。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **UI**: React 18
- **样式**: Tailwind CSS
- **图标**: React Icons

## 功能特性

- ✨ 现代化的响应式设计
- 📝 博客文章展示系统
- 🚀 项目作品展示
- 📱 移动端适配
- 🎨 优雅的 UI 设计
- ⚡ 快速的页面加载速度

## 项目结构

```
person-website/
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── blog/         # 博客页面
│   │   ├── projects/     # 项目页面
│   │   ├── about/        # 关于页面
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # React 组件
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── BlogCard.tsx
│   │   └── ProjectCard.tsx
│   └── types/           # TypeScript 类型定义
│       └── index.ts
├── public/              # 静态资源
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm run start
```

## 自定义配置

### 修改网站信息

1. 编辑 `src/app/layout.tsx` 修改网站标题和描述
2. 编辑 `src/components/Navigation.tsx` 修改导航链接
3. 编辑 `src/components/Footer.tsx` 修改社交媒体链接

### 添加博客文章

1. 在 `src/app/blog/page.tsx` 中添加博客数据
2. 或者集成 Markdown 文件系统（需要额外配置）

### 添加项目

在 `src/app/projects/page.tsx` 中的 `projects` 数组添加新项目。

## 部署

### Vercel

推荐使用 Vercel 部署（Next.js 的开发团队）：

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 点击部署

### 其他平台

也可以部署到 Netlify、Railway 等支持 Next.js 的平台。

## 了解更多

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [TypeScript 文档](https://www.typescriptlang.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## License

MIT

