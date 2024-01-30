# Github

在进行项目开发时，都会用到版本控制工具来记录开发过程对项目的更改。有很多可以控制版本的工具，为了项目的合作与代码的版本控制。项目组使用`Git`进行版本控制，其常用代码托管平台就是大名鼎鼎的Github，在这里记录一些常见的代码。

1.创建项目

![create_item](./static/create_item.png)

## git常用命令

#### 拉取代码

```
git clone xxx.git
```

#### 创建分支

```
git branch dev
# or
git checkout -b dev
# or
git switch -c dev
```

#### 切换本地分支

```
git checkout dev
# or
git switch dev
```

#### 切换分支并关联远程分支

```
git checkout -b dev origin/dev
# or
git checkout --track origin/dev
```

#### 查看本地所有分支

```
git branch
```

#### 查看远程所有分支

```
git branch -r
```

#### 删除本地分支

```
git branch -d dev
```

#### 删除远程分支

```
git push origin -d dev
```

#### 将代码从工作区添加暂存区

```
git add .
```

#### 查看尚未暂存的更新

```
git diff
```

#### 添加提交信息（`commit` 注释写错，执行 `git commit --amend` 此时会进入默认 `vim` 编辑器，修改注释后保存）

```
git commit -m 'xxxx'
```

#### 推送代码到远程分支

```
git push origin dev

# 强制推送（常在 git rebase 或 git reset 后使用）
git push -f origin dev
```

#### 拉取远程分支代码

```
git pull origin dev
```

#### 合并分支

```
git merge dev
```

####  查看 `git` 状态

```
git status
```

#### 查看提交历史

```
git log
```

#### 查看可引用的历史版本记录

```
git reflog
```

#### 把本地未 `push` 的分叉提交历史整理成直线

```
git rebase origin/dev
```

#### 回到 `rebase` 执行之前的状态

```
git rebase --abort
```

#### 回退版本

```
# 回退指定 commit_id 版本
git reset --hard commit_id

# 回退上一个版本
git reset --soft HEAD^
# or
git reset --soft HEAD~1
```

####  撤销代码

```
git revert commit_id
```

#### 修改分支名

```
# 第一步
git branch -m oldBranchName newBranchName

# 第二步
git push origin :oldBranchName

# 第三步
git push --set-upstream origin newBranchName
```

#### 查看 `git` 配置

```
# 查看全局配置
git config --global --list

# 查看用户名
git config --global user.name
```

####  添加用户名

```
git config --global --add user.name newName
```

#### 删除用户名

```
git config --global --unset user.name
```

####  修改用户名

```
git config --global user.name newName
```

#### 配置 `Git` 用户名和邮箱

```
# 用户名
git config --global user.name "Your Name"

# 邮箱
git config --global user.email "email@example.com"
```

#### 统计代码行数

```
git ls-files | xargs wc -l
```

#### 文件或文件夹重命名

`Git` 在 `Windows` 和 `macOS` 的默认文件系统中对文件大小写修改是不敏感的。可能你会先删除文件并提交，然后再新建文件再提交，这样做很麻烦，下面的 `git mv` 就简化了繁琐的操作
比如文件 `filename.ts` 或文件夹 `jsutils`，它们的相对路径分别是 `src/filename.ts` 和 `src/jsutils`

```
# 将 filename.ts 文件重命名为 fileName.ts，分下面两步
# 第一步（注意下面的 name.ts 与 filename.ts 是不同的，如果你把 name.ts 改为 fileName.ts 是不行的，因为上面讲了仅大小写不同是不行的）
git mv src/filename.ts src/name.ts
# 第二步
git mv src/name.ts src/fileName.ts

# 将 jsutils 文件夹重命名为 jsUtils，分下面两步
# 第一步
git mv src/jsutils src/utils
# 第二步
git mv src/utils src/jsUtils
```

## 提交规范

`feat:` 增加新功能

`fix: `修复问题/BUG

`style:` 代码风格相关无影响运行结果的

`perf:` 优化/性能提升

`refactor:` 重构

`revert:` 撤销修改

`test:` 测试相关

`docs: `文档/注释

`chore: `依赖更新/脚手架配置修改等

`workflow: `工作流改进

`ci: `持续集成

`types: `类型定义文件更改

`wip: `开发中

