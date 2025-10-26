# 快速开始指南

## 🚀 安装和运行

### 1. 安装依赖

```bash
npm install
```

或使用 yarn/pnpm:

```bash
yarn install
# 或
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 3. 构建生产版本

```bash
npm run build
npm run start
```

## 📁 项目结构说明

```
person-website/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── blog/              # 博客页面
│   │   │   ├── [slug]/       # 动态博客详情页
│   │   │   └── page.tsx      # 博客列表页
│   │   ├── projects/          # 项目展示页
│   │   ├── about/             # 关于页面
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   └── globals.css        # 全局样式
│   │
│   ├── components/            # React 组件
│   │   ├── Layout.tsx         # 页面布局组件
│   │   ├── Navigation.tsx     # 导航栏
│   │   ├── Footer.tsx         # 页脚
│   │   ├── BlogCard.tsx       # 博客卡片
│   │   └── ProjectCard.tsx    # 项目卡片
│   │
│   ├── types/                 # TypeScript 类型定义
│   │   └── index.ts
│   │
│   ├── lib/                   # 工具函数
│   │   └── utils.ts
│   │
│   └── data/                  # 数据文件
│       └── mock-data.ts       # 模拟数据
│
├── public/                    # 静态资源
├── package.json               # 项目依赖
├── tsconfig.json              # TypeScript 配置
├── tailwind.config.ts         # Tailwind CSS 配置
└── next.config.js             # Next.js 配置
```

## 🎨 自定义网站

### 修改网站标题和描述

编辑 `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: '你的网站标题',
  description: '你的网站描述',
};
```

### 修改导航链接

编辑 `src/components/Navigation.tsx` 中的 `navLinks` 数组。

### 修改社交媒体链接

编辑 `src/components/Footer.tsx` 中的社交媒体链接。

### 添加博客文章

当前使用模拟数据。编辑 `src/data/mock-data.ts` 中的 `mockBlogPosts` 数组。

未来可以：
- 集成 Markdown 文件
- 连接 CMS (如 Contentful, Strapi)
- 使用数据库存储

### 添加项目

编辑 `src/data/mock-data.ts` 中的 `mockProjects` 数组。

## 🎯 核心功能

### 页面路由

- `/` - 首页
- `/blog` - 博客列表
- `/blog/[slug]` - 博客详情页
- `/projects` - 项目展示
- `/about` - 关于页面

### 响应式设计

所有页面都已适配移动端，使用 Tailwind CSS 的响应式类。

### 性能优化

- 使用 Next.js 14 App Router
- 自动代码分割
- 图片优化（使用 next/image）
- CSS 优化

## 🛠 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **UI 库**: React 18
- **样式**: Tailwind CSS
- **图标**: React Icons
- **部署**: Vercel (推荐)

## 📝 后续改进建议

1. **博客系统**:
   - 集成 Markdown 支持（使用 `gray-matter` 和 `remark`）
   - 添加搜索功能
   - 添加标签过滤

2. **项目展示**:
   - 添加项目详情页
   - 集成 GitHub API 显示实时数据

3. **性能优化**:
   - 添加图片懒加载
   - 使用 next/image 组件
   - 实现 SEO 优化

4. **功能增强**:
   - 添加评论系统
   - 添加深色模式
   - 集成分析工具

## 🚀 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入项目
3. 点击部署

### Netlify

```bash
npm run build
```

然后部署 `.next` 文件夹。

## 📚 相关资源

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [TypeScript 文档](https://www.typescriptlang.org)
- [Tailwind CSS 文档](https://tailwindcss.com)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT

