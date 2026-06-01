# Xu Notes

一个可直接发布到 GitHub Pages 的静态个人主页。

## 发布前修改

在 `index.html` 中替换站点名称、简介和邮箱。当前邮箱
`hello@xunotes.com` 只是占位内容；在配置邮箱服务之前不会自动收信。

## 发布到 GitHub Pages

1. 在 GitHub 右上角头像菜单中打开 `Settings` > `Pages`。
2. 在 `Verified domains` 中选择 `Add a domain`，填写 `xunotes.com`。
3. 按 GitHub 页面提示，在 Cloudflare 添加 TXT 记录。验证成功后保留该记录。
4. 在 GitHub 新建公开仓库，建议命名为 `xunotes-site`。
5. 将本目录中的文件上传到仓库根目录。
6. 打开仓库 `Settings` > `Pages`。
7. 在 `Build and deployment` 中选择 `Deploy from a branch`。
8. 选择 `main` 分支和 `/(root)` 目录，然后保存。
9. 在 `Custom domain` 中填写 `www.xunotes.com` 并保存。

## Cloudflare DNS

先完成 GitHub Pages 的 `Custom domain` 保存，再添加 DNS 记录。

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hong-2025.github.io |

第一轮配置时建议将 Cloudflare 的 `Proxy status` 设为 `DNS only`。

DNS 生效后，在 GitHub Pages 设置中打开 `Enforce HTTPS`。DNS 更新可能需要
最长 24 小时，HTTPS 选项也可能不会立刻出现。
