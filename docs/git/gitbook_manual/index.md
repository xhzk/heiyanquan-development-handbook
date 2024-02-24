# GItBook 



GitBook 是什么？其实用一句话就可以概括，它是一个 **能将使用 Markown 语法的 md 格式文档，快速制作成各种格式电子书的工具**。

常被用于编写文档或者电子书，特点是方便简洁，易于使用。只要熟悉轻量级标记语法的 Markdown 语法，就能使用 GitBook 来制作各种格式的电子书。

GitBook 有网页版和本地版两种，网页版通过 [https://www.gitbook.com](https://www.gitbook.com/) 网址进行访问，本地版主要是基于 Node.js 环境进行开发。

> [!NOTE]
> 目前虽然 GitBook 的代码无人维护，但是好在代码是开源的，可以根据自己需求来更改。

网页版没玩明白，下面主要讲解Windows本地部署



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
