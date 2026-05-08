# Agent Sandbox 项目官网 - 技术架构文档

## 1. 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.x | UI 框架 |
| TypeScript | 5.x | 类型系统 |
| Vite | 5.x | 构建工具 |
| Tailwind CSS | 3.x | 样式方案 |
| Framer Motion | 11.x | 动画库 |
| Lucide React | 最新 | 图标库 |

## 2. 项目结构

```
/workspace
├── src/
│   ├── components/          # 组件目录
│   │   ├── Hero.tsx         # Hero 区域组件
│   │   ├── Features.tsx    # 特性展示组件
│   │   ├── Architecture.tsx # 架构图组件
│   │   ├── CodeExample.tsx  # 代码示例组件
│   │   ├── Footer.tsx       # 页脚组件
│   │   └── Navbar.tsx       # 导航栏组件
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── vite.config.ts           # Vite 配置
├── tailwind.config.js       # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
└── postcss.config.js        # PostCSS 配置
```

## 3. 组件设计

### 3.1 Navbar 组件
- Logo + 导航链接 + CTA 按钮
- 固定顶部，滚动时添加背景模糊效果
- 响应式移动端菜单

### 3.2 Hero 组件
- 全屏高度，渐变背景
- 动态粒子/网格效果
- 标题 + 副标题 + 双 CTA 按钮
- Framer Motion 动画

### 3.3 Features 组件
- 2x2 网格布局
- 每个特性卡片：图标 + 标题 + 描述
- 悬停时的边框发光效果

### 3.4 Architecture 组件
- SVG 绘制的流程图
- 节点 + 连线 + 动画
- 清晰的层级展示

### 3.5 CodeExample 组件
- 代码语法高亮
- 一键复制功能
- 语言标签

### 3.6 Footer 组件
- 多列布局
- 链接分组
- 社交媒体图标
- 版权信息

## 4. 样式系统

### 4.1 颜色变量
```css
--color-primary: #00D9FF;     /* 科技蓝 */
--color-secondary: #FF6B35;  /* 活力橙 */
--color-background: #0A0A0F;  /* 深黑背景 */
--color-surface: #1A1A2E;    /* 卡片背景 */
--color-text: #FFFFFF;       /* 主文字 */
--color-text-secondary: #94A3B8; /* 次级文字 */
```

### 4.2 字体系统
- 标题：Space Grotesk, 700 weight
- 正文：Inter, 400/500 weight
- 代码：JetBrains Mono, 400 weight

## 5. 动画设计

### 5.1 页面加载动画
- Navbar: opacity 0→1, y: -20→0, duration: 0.5s
- Hero 内容: opacity 0→1, y: 20→0, duration: 0.6s, delay: 0.2s
- Features: stagger 0.1s each, opacity 0→1, y: 40→0

### 5.2 交互动画
- 按钮 hover: scale 1.02, shadow-lg
- 卡片 hover: border-glow, translateY -4px
- 链接 hover: color transition 0.2s

### 5.3 背景效果
- 粒子动画：Canvas 绘制，缓慢移动的圆点
- 渐变网格：CSS 渐变背景，周期性动画

## 6. 性能优化

- 组件懒加载
- 图片优化
- 代码分割
- CSS 压缩
