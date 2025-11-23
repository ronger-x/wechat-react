# 微信列表生成器 (WeChat List Generator)

一个使用 React 构建的微信聊天列表生成器，可以生成逼真的微信聊天界面截图。

## ✨ 功能特性

- 📱 **逼真的微信界面** - 高度还原微信 iOS 客户端界面
- 🎨 **多种头像样式** - 支持混合样式、黑白风格、模糊效果
- 📊 **自定义生成** - 自定义聊天数量、消息内容
- 📶 **信号强度调节** - 可调整 Wi-Fi 信号强度显示
- 📸 **截图模式** - 进入纯净截图模式，便于截图保存
- 📜 **长截图支持** - 一键生成完整聊天列表长截图，自动下载
- 🕐 **实时时间** - 状态栏显示当前真实时间
- 🔄 **随机生成** - 随机生成中文姓名和聊天时间
- ⏰ **智能时间分组** - 每9条记录共享相同时间（符合微信一次最多选9位好友分享的真实场景）

## 🚀 快速开始

### 方式一：本地开发

#### 安装依赖

```bash
pnpm install
```

#### 运行开发服务器

```bash
pnpm dev
```

访问 http://localhost:5173 查看应用

#### 构建生产版本

```bash
pnpm build
```

#### 预览生产版本

```bash
pnpm preview
```

### 方式二：使用 Docker

#### 使用 Docker Compose（推荐）

```bash
# 构建并启动
docker compose up -d

# 查看日志
docker compose logs -f

# 停止服务
docker compose down
```

访问 http://localhost:3000 查看应用

#### 使用 Dockerfile

```bash
# 构建镜像
docker build -t wechat-react .

# 运行容器
docker run -d -p 3000:80 --name wechat-react wechat-react

# 停止容器
docker stop wechat-react

# 删除容器
docker rm wechat-react
```

## 📖 使用说明

1. **配置聊天内容**
   - 在左侧配置面板输入统一的聊天内容
   - 支持输入 `[链接]`、`[图片]` 等占位符

2. **设置生成数量**
   - 可生成 1-50 条聊天记录
   - 系统会自动生成随机的中文姓名

3. **选择头像样式**
   - 🎨 混合样式：随机彩色图片
   - ⚫ 黑白风格：灰度化头像
   - 🌫️ 模糊效果：带模糊效果的头像

4. **调整信号强度**
   - 弱、中、强三种 Wi-Fi 信号显示

5. **截图模式**
   - 点击"进入截图模式"按钮
   - 背景变黑，手机界面居中
   - 点击屏幕任意位置退出截图模式
   - 适合使用外部工具截图

6. **长截图功能**
   - 点击"生成长截图"按钮
   - 自动展开所有聊天记录（无论多少条）
   - 使用 html-to-image 库生成高清截图
   - 自动下载为 PNG 图片
   - 支持高分辨率设备（自动适配 devicePixelRatio）

## 🏗️ 技术栈

- **React 19** - 最新的 React 版本
- **Vite** - 快速的开发构建工具
- **Tailwind CSS 3** - 实用优先的 CSS 框架
- **JavaScript (ES6+)** - 现代 JavaScript
- **html-to-image** - DOM 转图片库，用于长截图功能
- **Docker** - 容器化部署
- **Nginx** - 生产环境 Web 服务器

## 📁 项目结构

```
wechat-react/
├── public/                 # 静态资源
│   └── wechat.svg         # 微信图标
├── src/
│   ├── components/         # React 组件
│   │   ├── ChatList.jsx   # 聊天列表组件
│   │   ├── ConfigPanel.jsx # 配置面板组件
│   │   ├── Icons.jsx      # SVG 图标组件集合
│   │   ├── PhoneSimulator.jsx # 手机模拟器组件
│   │   ├── StatusBar.jsx  # 状态栏组件（时间、信号、电池）
│   │   └── TabBar.jsx     # 底部标签栏组件
│   ├── utils/             # 工具函数
│   │   ├── constants.js   # 常量定义（头像样式等）
│   │   ├── generator.js   # 聊天列表生成逻辑
│   │   └── screenshot.js  # 长截图功能实现
│   ├── App.jsx            # 主应用组件
│   ├── App.css            # 应用样式
│   ├── main.jsx           # 应用入口
│   └── index.css          # 全局样式（Tailwind CSS 导入）
├── .dockerignore          # Docker 忽略文件配置
├── .gitignore             # Git 忽略文件配置
├── compose.yaml           # Docker Compose 配置
├── Dockerfile             # Docker 镜像构建文件
├── eslint.config.js       # ESLint 配置
├── index.html             # HTML 入口文件
├── package.json           # 项目依赖配置
├── pnpm-lock.yaml         # pnpm 锁定文件
├── postcss.config.js      # PostCSS 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── vite.config.js         # Vite 构建工具配置
└── README.md              # 项目说明文档
```

## 💡 特色功能详解

### 随机姓名生成
使用常见的中文姓氏和名字库，自动生成 2-3 字的随机中文姓名，更加贴近真实微信用户。

### 智能时间分组
- 每9条聊天记录使用相同的时间戳
- 符合微信"一次最多选取9位好友分享"的真实场景
- 使生成的截图更加真实可信

### 长截图制作技巧
- **一键生成**：点击"生成长截图"按钮，自动完成以下操作：
  - 自动展开聊天列表（移除高度限制和滚动）
  - 等待所有头像图片加载完成
  - 生成完整的高清 PNG 截图
  - 自动下载到本地（文件名包含时间戳）
  
- **技术实现**：
  - 使用 `html-to-image` 库将 DOM 转换为图片
  - 支持高分辨率屏幕（Retina 等）
  - 自动适配设备像素比（devicePixelRatio）
  - 临时移除边框圆角和阴影，生成纯净截图
  - 生成后自动恢复原始样式
  
- **使用建议**：
  - 生成数量建议：20-50 条聊天记录效果最佳
  - 等待加载：首次点击后等待所有头像加载完成
  - 图片质量：默认 95% 质量，可在代码中调整
  - 文件大小：根据聊天数量，通常 100KB - 2MB

### 头像图片
使用 Picsum Photos API 生成随机头像图片，支持灰度和模糊效果，让每次生成都有不同的视觉效果。

## 🎯 应用场景

- 📊 数据可视化演示
- 🎓 教学演示材料
- 🎨 UI/UX 设计原型
- 📱 应用截图制作

## 📄 许可证

MIT

## 🐳 Docker 部署说明

### 镜像构建

项目使用多阶段构建，优化镜像大小：
1. **构建阶段**：使用 Node.js 20 Alpine 镜像，通过 pnpm 安装依赖并构建项目
2. **生产阶段**：使用 Nginx Alpine 镜像提供静态文件服务

### 环境变量

可在 `compose.yaml` 中配置环境变量（如需要）

### 端口映射

- 默认映射：主机 `3000` 端口 → 容器 `80` 端口
- 可在 `compose.yaml` 中自定义端口

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 🔗 相关链接

- [GitHub 仓库](https://github.com/ronger-x/wechat-react)
- [在线演示](https://wechat.ronger.io)

