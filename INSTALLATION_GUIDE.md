# 安装指南

## ⚠️ NPM 缓存权限问题

如果你在运行 `npm install` 时遇到权限错误，请按照以下步骤解决：

### 方法 1：修复 NPM 缓存权限（推荐）

```bash
# 修复 npm 缓存文件夹的权限
sudo chown -R $(whoami) ~/.npm

# 然后重新安装
npm install
```

### 方法 2：使用其他包管理器

#### 使用 Yarn

```bash
# 安装 Yarn（如果还没有）
npm install -g yarn

# 使用 Yarn 安装依赖
yarn install

# 启动开发服务器
yarn dev
```

#### 使用 PNPM

```bash
# 安装 PNPM（如果还没有）
npm install -g pnpm

# 使用 PNPM 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 方法 3：清理并重新安装

```bash
# 删除旧的 node_modules
rm -rf node_modules

# 删除 package-lock.json
rm package-lock.json

# 修复权限
sudo chown -R $(whoami) ~/.npm

# 重新安装
npm install
```

## ✅ Tailwind CSS 配置状态

项目已经完全配置好 Tailwind CSS：

### 1. 依赖包（已添加到 package.json）
- ✅ `tailwindcss: ^3.4.0`
- ✅ `autoprefixer: ^10.4.16`
- ✅ `postcss: ^8.4.32`

### 2. 配置文件
- ✅ `tailwind.config.ts` - Tailwind 配置
- ✅ `postcss.config.js` - PostCSS 配置
- ✅ `src/app/globals.css` - 包含 @tailwind 指令

### 3. 组件样式
- ✅ 所有组件都使用 Tailwind CSS 类名
- ✅ 响应式设计已实现
- ✅ 自定义颜色主题已配置

## 🎨 Tailwind CSS 使用情况

项目中所有组件都已经使用 Tailwind CSS：

### 组件列表
- `Navigation.tsx` - 完全使用 Tailwind 类
- `Footer.tsx` - 完全使用 Tailwind 类
- `Layout.tsx` - 完全使用 Tailwind 类
- `BlogCard.tsx` - 完全使用 Tailwind 类
- `ProjectCard.tsx` - 完全使用 Tailwind 类

### 页面列表
- 首页 (`page.tsx`) - 完全使用 Tailwind 类
- 博客列表页 (`blog/page.tsx`) - 完全使用 Tailwind 类
- 博客详情页 (`blog/[slug]/page.tsx`) - 完全使用 Tailwind 类
- 项目页 (`projects/page.tsx`) - 完全使用 Tailwind 类
- 关于页 (`about/page.tsx`) - 完全使用 Tailwind 类

## 🎯 Tailwind 特性使用

项目中使用了以下 Tailwind CSS 特性：

### 响应式设计
```jsx
className="flex flex-col md:flex-row"  // 移动端垂直，桌面端水平
className="hidden md:flex"              // 仅在桌面端显示
className="grid md:grid-cols-2"         // 响应式网格
```

### 实用类
- **布局**: `flex`, `grid`, `container`, `mx-auto`
- **间距**: `p-4`, `m-8`, `space-x-4`, `gap-8`
- **颜色**: `bg-blue-600`, `text-gray-800`, `hover:text-blue-600`
- **文字**: `text-xl`, `font-bold`, `leading-relaxed`
- **圆角**: `rounded-lg`, `rounded-full`
- **阴影**: `shadow-md`, `hover:shadow-xl`
- **过渡**: `transition-colors`, `transition-shadow`

### 自定义主题
在 `tailwind.config.ts` 中定义了自定义主题色：

```typescript
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
    // ... 更多颜色
  },
}
```

## 🚀 启动项目

安装完依赖后，运行：

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 运行生产服务器
npm run start
```

## 📝 验证 Tailwind CSS

启动开发服务器后，你应该能看到：
- ✅ 美观的样式和颜色
- ✅ 响应式布局（尝试调整浏览器窗口大小）
- ✅ 悬停效果和过渡动画
- ✅ 自定义滚动条
- ✅ 移动端菜单

## 🔍 检查 Tailwind 是否工作

如果样式没有生效：

1. **检查浏览器控制台** - 查看是否有错误
2. **确保依赖已安装** - 检查 `node_modules` 目录
3. **重启开发服务器** - `Ctrl+C` 停止，然后 `npm run dev` 重启
4. **清除缓存** - 删除 `.next` 目录并重新运行

```bash
rm -rf .next
npm run dev
```

## 💡 提示

- 项目已经 100% 使用 Tailwind CSS
- 没有使用传统的 CSS 模块或内联样式
- 所有自定义样式都在 `globals.css` 中使用 Tailwind 指令
- 可以直接在组件中使用任何 Tailwind 类

## 🆘 遇到问题？

1. **权限错误**: 使用上面的方法 1 修复 npm 权限
2. **依赖冲突**: 删除 `node_modules` 和 `package-lock.json` 重新安装
3. **样式不生效**: 确保 `tailwind.config.ts` 的 content 路径正确
4. **构建错误**: 检查 Node.js 版本（需要 >= 18）

---

**Tailwind CSS 配置完成！** 🎨✨

