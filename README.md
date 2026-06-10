# Xu Notes

`xunotes.com` 是一个个人网站，用作个人知识库、研究记录和笔记入口。

当前站点使用原生 HTML、CSS、JavaScript 构建，静态页面发布到 GitHub Pages。匿名留言功能使用 Cloudflare Worker 和 D1 数据库。

## 当前功能

- 中英文双语首页。
- 投资、技术、生活栏目入口。
- 投资二级页和投资标的三级页。
- 技术二级页和技术知识点三级页。
- 美食二级页、菜谱三级页和单个菜谱四级详情页。
- 匿名留言页。
- 隐藏留言管理页。

## 本地预览

可以直接用浏览器打开 `index.html`。

如果需要用本地 HTTP 服务预览，可在项目根目录运行：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000/
```

如果本机没有 Python，也可以使用其它静态文件服务器。项目不依赖前端框架或构建步骤。

## 部署到 GitHub Pages

静态网站部署在 GitHub Pages。

- 仓库：`https://github.com/hong-2025/xunotes-site`
- 发布分支：`main`
- 发布目录：仓库根目录
- 自定义域名：`www.xunotes.com`

部署流程：

1. 修改静态文件。
2. 本地检查 JavaScript 语法和页面链接。
3. 提交到 `main` 分支。
4. 推送到 GitHub。
5. 等待 GitHub Pages 构建完成。

如普通 `git push` 因网络原因不可用，可以使用 GitHub 官方 API 更新仓库，但应在最终说明中注明。

## Cloudflare DNS

当前 DNS 记录：

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hong-2025.github.io |

所有记录保持 `DNS only`。GitHub Pages 已开启 HTTPS。

## 留言服务

留言服务位于 `worker/`，使用 Cloudflare Worker + D1。

前端通过 `config.js` 中的 `messageApiUrl` 连接 Worker。

管理员口令通过 Cloudflare Worker Secret `ADMIN_TOKEN` 保存，不应写入仓库。

常用命令：

```powershell
cd worker
npm install
npx wrangler login
npm run db:create
npm run db:init
npm run secret:set
npm run deploy
```

本地测试：

```powershell
node worker/test.mjs
```

## 文档

- `AGENTS.md`：Codex 后续维护规则。
- `docs/product.md`：网站定位。
- `docs/roadmap.md`：后续规划。
- `docs/structure.md`：项目结构。
- `docs/changelog.md`：变更记录。
