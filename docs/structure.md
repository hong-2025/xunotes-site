# 项目结构

当前项目是一个静态网站加 Cloudflare Worker 留言服务。

## 根目录文件

- `index.html`：网站首页，中英文双语入口。
- `styles.css`：全站样式文件。
- `site.js`：全站通用翻译、中英文切换和基础文本。
- `category.html`：栏目二级页模板。
- `category.js`：栏目二级页渲染逻辑。
- `investment.html`：投资标的三级页模板。
- `investment.js`：投资标的三级页渲染逻辑。
- `investments.js`：投资栏目数据。
- `tech-note.html`：技术知识点三级页模板。
- `tech-note.js`：技术知识点三级页渲染逻辑。
- `tech-notes.js`：技术知识点数据。
- `summaries.js`：摘要栏目数据。
- `recipes.html`：美食下的菜谱三级页。
- `recipes-page.js`：菜谱列表页渲染逻辑。
- `recipe.html`：单个菜谱四级详情页模板。
- `recipe.js`：单个菜谱详情页渲染逻辑。
- `recipes.js`：菜谱数据。
- `exchange.html`：匿名留言页面。
- `exchange.js`：匿名留言提交逻辑。
- `admin-messages.html`：隐藏留言管理页面。
- `admin-messages.js`：留言读取逻辑。
- `config.js`：前端配置，目前保存留言 Worker 地址。
- `CNAME`：GitHub Pages 自定义域名配置，当前为 `www.xunotes.com`。
- `.nojekyll`：关闭 GitHub Pages 的 Jekyll 处理。
- `.gitignore`：忽略本地依赖和临时目录。
- `README.md`：项目说明。
- `AGENTS.md`：Codex 后续维护规则。

## docs 目录

- `docs/product.md`：产品定位。
- `docs/roadmap.md`：后续规划。
- `docs/structure.md`：项目结构说明。
- `docs/changelog.md`：变更记录。

## worker 目录

留言服务使用 Cloudflare Worker + D1。

- `worker/src/index.js`：Worker 接口代码，包含匿名提交、管理员读取和健康检查。
- `worker/schema.sql`：D1 数据库表结构。
- `worker/wrangler.toml`：Cloudflare Worker 和 D1 绑定配置。
- `worker/package.json`：Worker 部署和数据库命令。
- `worker/package-lock.json`：Worker 依赖锁定文件。
- `worker/test.mjs`：留言接口的本地流程测试。

## 页面层级

- 首页：`index.html`
- 二级栏目页：`category.html?category=investment`、`category.html?category=technology`、`category.html?category=summary`
- 三级详情页：`investment.html?asset=...`、`tech-note.html?note=...`、`recipes.html`
- 四级详情页：`recipe.html?recipe=...`

## 部署结构

- 静态页面：GitHub Pages
- 域名：Cloudflare DNS
- 留言接口：Cloudflare Worker
- 留言数据库：Cloudflare D1
