#!/bin/bash

echo "🎨 Tailwind CSS 项目安装脚本"
echo "================================"
echo ""

# 检测是否有权限问题
if [ -d ~/.npm ]; then
    echo "📋 检查 npm 缓存权限..."
    if [ ! -w ~/.npm ]; then
        echo "⚠️  检测到 npm 缓存权限问题"
        echo "正在修复..."
        sudo chown -R $(whoami) ~/.npm
    fi
fi

echo ""
echo "📦 开始安装依赖..."
echo ""

# 尝试使用 npm 安装
if command -v npm &> /dev/null; then
    echo "使用 npm 安装..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 依赖安装成功！"
        echo ""
        echo "🚀 启动开发服务器："
        echo "   npm run dev"
        echo ""
        echo "🌐 然后在浏览器打开："
        echo "   http://localhost:3000"
        exit 0
    fi
fi

# 如果 npm 失败，尝试 yarn
if command -v yarn &> /dev/null; then
    echo ""
    echo "npm 安装失败，尝试使用 yarn..."
    yarn install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 依赖安装成功！"
        echo ""
        echo "🚀 启动开发服务器："
        echo "   yarn dev"
        exit 0
    fi
fi

# 如果 yarn 也失败，尝试 pnpm
if command -v pnpm &> /dev/null; then
    echo ""
    echo "尝试使用 pnpm..."
    pnpm install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ 依赖安装成功！"
        echo ""
        echo "🚀 启动开发服务器："
        echo "   pnpm dev"
        exit 0
    fi
fi

echo ""
echo "❌ 自动安装失败"
echo ""
echo "请尝试以下方法："
echo "1. 手动修复 npm 权限："
echo "   sudo chown -R \$(whoami) ~/.npm"
echo "   npm install"
echo ""
echo "2. 或使用 yarn："
echo "   npm install -g yarn"
echo "   yarn install"
echo ""
echo "3. 或使用 pnpm："
echo "   npm install -g pnpm"
echo "   pnpm install"

