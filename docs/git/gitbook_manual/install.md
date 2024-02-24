# 安装

## 1.配置Node.js

由于目前Gitbook项目已经停止维护，Node版本过高存在不兼容问题，所以需要使用老版本的Node，但是卸载重新安装进行版本切换过于麻烦，所以使用Node的版本控制工具gnvm，安装8.11.1（自己测试的，按照官网上的差不多10.x一下就可以）

```
# 安装node@8.11.1
gnvm install 8.11.1

# 切换版本
gnvm use 8.11.1

# 查看node版本
node -v
```

## 2.安装GitBook

在cmd终端输入以下命令即可
> [!TIP|style:flat]
>
> 1.以管理员身份启动cmd
>
> 2.`-V`是大写的`V`

```
# 全局安装gitbook-cli
npm install gitbook-cli -g

# 查看gitbook版本
gitbook -V
```
