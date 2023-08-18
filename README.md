# gla-check-in
> 使用[Github Actions](https://docs.github.com/en/actions)自动签到[GlaDOS](https://glados.one/)

* 获取Cookie：登录[GlaDOS](https://glados.one/) => 打开浏览器控制台 => 切换到Network网络面板 => 获取Cookie；
* 设置GLADOS Secrets：仓库主页 => Setting => 展开`Secrets and variables` => `Actions` => `New repository secret` => `Name`填GLADOS，`Secret`填前面获取的Cookie => `Add secret`；
  > 关于更多GitHub Secrets详细说明和用法，可移步[Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
* 若需要通知：登录[pushplus](https://www.pushplus.plus/) => 复制提供的token => 设置 NOTIFY Secrets（设置Secrets步骤同上）;

