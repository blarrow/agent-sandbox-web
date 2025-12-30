# Agent Sandbox 官网

Agent Sandbox 的官方网站，使用 Next.js 构建，展示平台功能、使用方法和示例。

## 功能特性

- 🎨 现代化、响应式设计
- 📱 移动端友好
- ⚡ 流畅的动画效果
- 🔍 SEO 优化
- 🎯 清晰的信息架构
- ⚛️ 基于 Next.js 14 App Router
- 🎭 React Server Components
- 🎨 CSS Modules 样式隔离

## 项目结构

```
/
├── app/
│   ├── layout.tsx      # 根布局组件
│   ├── page.tsx        # 主页面
│   └── globals.css     # 全局样式
├── components/         # React 组件
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Examples.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── package.json        # 项目依赖
├── next.config.js      # Next.js 配置
├── tsconfig.json       # TypeScript 配置
└── README.md           # 项目说明
```

## 快速开始

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

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm run start
# 或
yarn build
yarn start
# 或
pnpm build
pnpm start
```

## 技术栈

- **Next.js 14** - React 框架，使用 App Router
- **React 18** - UI 库
- **TypeScript** - 类型安全
- **CSS Modules** - 样式隔离
- **Google Fonts (Inter)** - 字体

## 主要组件

- **Navbar** - 导航栏，支持移动端菜单
- **Hero** - 首页英雄区域，包含代码示例
- **Features** - 功能特性展示
- **HowItWorks** - 工作原理说明
- **Examples** - 使用示例
- **CTA** - 行动号召，邮箱注册表单
- **Footer** - 页脚信息

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 开发说明

### 添加新组件

1. 在 `components/` 目录下创建新的组件文件
2. 使用 CSS Modules 进行样式管理
3. 在 `app/page.tsx` 中引入并使用

### 样式规范

- 使用 CSS Modules 进行样式隔离
- 全局样式定义在 `app/globals.css`
- 使用 CSS 变量定义主题颜色

## 部署

### Vercel (推荐)

```bash
npm i -g vercel
vercel
```

### 其他平台

构建完成后，`out` 目录包含静态文件，可以部署到任何静态托管服务。

## 许可证

MIT License
