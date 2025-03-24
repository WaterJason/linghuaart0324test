# 聆花文化网站部署指南

本文档提供聆花文化网站的详细部署指南，包括不同平台的部署方法和常见问题解决方案。

## 网站类型

聆花文化网站是一个**静态网站**，使用 Next.js 的静态导出功能生成纯 HTML、CSS 和 JavaScript 文件，无需服务器端渲染。这意味着网站可以部署在任何支持静态文件托管的平台上。

## 部署准备

### 1. 构建静态文件

在部署前，需要先构建静态文件：

```bash
# 安装依赖
bun install

# 构建静态文件
bun run build
```

构建完成后，静态文件将生成在项目的 `/out` 目录中。

### 2. 检查静态文件

确保 `/out` 目录中包含以下内容：
- HTML 文件（包括 index.html 和其他页面）
- CSS 和 JavaScript 文件（在 `/_next` 目录中）
- 图片和其他静态资源
- `.nojekyll` 文件（确保 GitHub Pages 等平台不会忽略以下划线开头的文件）

## 部署方法

### 方法一：使用 Netlify 部署

Netlify 是部署静态网站的理想选择，支持自动部署和自定义域名。

#### 步骤：

1. 注册 [Netlify](https://www.netlify.com/) 账号
2. 点击 "New site from Git" 按钮
3. 连接代码仓库（GitHub, GitLab 或 Bitbucket）
4. 配置构建设置：
   - 构建命令：`bun run build`
   - 发布目录：`out`
5. 点击 "Deploy site" 按钮

#### 使用 netlify.toml 配置：

项目根目录下已经包含了 `netlify.toml` 文件，内容如下：

```toml
[build]
  command = "bun run build"
  publish = "out"

[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"

[build.processing]
  skip_processing = true
```

### 方法二：使用 GitHub Pages 部署

GitHub Pages 是另一个免费且易用的静态网站托管服务。

#### 步骤：

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中找到 "Pages" 选项
3. 在 "Source" 部分选择 "GitHub Actions"
4. 创建一个新的 GitHub Actions 工作流文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1

      - name: Install dependencies
        run: bun install

      - name: Build
        run: bun run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

5. 推送此工作流文件后，GitHub Actions 将自动构建并部署网站
6. 在 GitHub Pages 设置中选择 `gh-pages` 分支作为源

### 方法三：手动上传到传统托管服务

如果您使用传统的虚拟主机或服务器：

1. 构建静态文件：`bun run build`
2. 将 `/out` 目录中的所有文件上传到服务器的网站根目录
3. 确保服务器配置为将 404 错误重定向到 `/404.html`

## 自定义域名设置

### Netlify 自定义域名

1. 在 Netlify 控制面板中，点击 "Domain settings"
2. 点击 "Add custom domain"
3. 输入您的域名并按照说明设置 DNS 记录

### GitHub Pages 自定义域名

1. 在仓库的 "Settings" > "Pages" 部分
2. 在 "Custom domain" 字段输入您的域名
3. 按照说明设置 DNS 记录
4. 勾选 "Enforce HTTPS" 选项以启用 HTTPS

## 常见问题排查

### 问题：图片无法显示

**解决方案**：
- 确保图片路径正确，使用以 `/` 开头的绝对路径
- 检查图片是否已包含在 `/out` 目录中
- 确保已添加 `.nojekyll` 文件（对 GitHub Pages 尤为重要）

### 问题：CSS 样式丢失

**解决方案**：
- 确保 `/_next` 目录中的文件被正确上传
- 检查是否存在路径问题，可能需要在 `next.config.js` 中设置 `basePath`
- 对于某些托管服务，可能需要配置 `.htaccess` 文件以正确处理静态资源

### 问题：链接失效或 404 错误

**解决方案**：
- 确保所有链接使用相对路径或以 `/` 开头的绝对路径
- 检查是否已经生成了所有必要的 HTML 文件
- 可能需要配置服务器将 404 错误重定向到 `/404.html`

## 注意事项

1. **静态限制**：静态网站无法使用 Next.js 的服务器端功能，如 API 路由或服务器组件
2. **更新内容**：更新内容后需要重新构建网站并重新部署
3. **大文件**：某些托管服务对文件大小有限制，请确保大图片已被适当优化
4. **缓存问题**：部署更新后，可能需要清除浏览器缓存才能看到最新内容

## 资源链接

- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Netlify 部署指南](https://docs.netlify.com/site-deploys/overview/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
