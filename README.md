# Xu Notes

`xunotes.com` 的个人网站。静态页面发布在 GitHub Pages，匿名留言使用
Cloudflare Worker 和 D1 数据库保存。

## 页面

- `index.html`：中英文双语首页
- `category.html?category=investment`：栏目二级页
- `exchange.html`：匿名留言页
- `admin-messages.html`：隐藏留言管理页，不在网站导航中显示

## GitHub Pages

网站仓库：`https://github.com/hong-2025/xunotes-site`

自定义域名：`www.xunotes.com`

## Cloudflare DNS

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hong-2025.github.io |

所有记录保持 `DNS only`。

## 留言服务

留言服务代码位于 `worker/`。部署后，将 Worker 地址写入 `config.js` 中的
`messageApiUrl`。

管理员口令通过 Worker Secret `ADMIN_TOKEN` 保存，不应写入仓库。

部署命令：

```powershell
cd worker
npm install
npx wrangler login
npm run db:create
# 将 D1 database_id 写入 wrangler.toml
npm run db:init
npm run secret:set
npm run deploy
```
