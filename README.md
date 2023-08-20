1. 获取 Cookie：登录 [GlaDOS](https://glados.one/) => 打开浏览器控制台 => 切换到 Network 网络面板 => 获取 Cookie； 
2. 设置 GLADOS Secrets：仓库主页 => `Setting` => 展开 `Secrets and variables` => `Actions` => `New repository secret` => `Name` 填 GLADOS，`Secret` 填前面获取的 Cookie => `Add secret`；
3. 若需要通知：登录 [pushplus](https://www.pushplus.plus/) => 复制提供的 token => 设置 NOTIFY Secrets（设置 Secrets 步骤同上）;

> * 关于 [Github Actions](https://docs.github.com/en/actions) 详细介绍及使用，可前往 [Github Docs](https://docs.github.com/en/actions);
> * 关于 [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) 详细介绍及使用，可前往 [Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)；
