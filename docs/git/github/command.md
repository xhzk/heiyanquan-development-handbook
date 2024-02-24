## git常用命令

### 拉取代码

```
git clone xxx.git
```

### 创建分支

```
git branch dev
# or
git checkout -b dev
# or
git switch -c dev
```

### 切换本地分支

```
git checkout dev
# or
git switch dev
```

### 切换分支并关联远程分支

```
git checkout -b dev origin/dev
# or
git checkout --track origin/dev
```

### 查看本地所有分支

```
git branch
```

### 查看远程所有分支

```
git branch -r
```

### 删除本地分支

```
git branch -d dev
```

### 删除远程分支

```
git push origin -d dev
```

### 将代码从工作区添加暂存区

```
git add .
```

### 查看尚未暂存的更新

```
git diff
```

### 添加提交信息（`commit` 注释写错，执行 `git commit --amend` 此时会进入默认 `vim` 编辑器，修改注释后保存）

```
git commit -m 'xxxx'
```

### 推送代码到远程分支

```
git push origin dev

# 强制推送（常在 git rebase 或 git reset 后使用）
git push -f origin dev
```

### 拉取远程分支代码

```
git pull origin dev
```

### 合并分支

```
git merge dev
```

###  查看 `git` 状态

```
git status
```

### 查看提交历史

```
git log
```

### 查看可引用的历史版本记录

```
git reflog
```

### 把本地未 `push` 的分叉提交历史整理成直线

```
git rebase origin/dev
```

### 回到 `rebase` 执行之前的状态

```
git rebase --abort
```

### 回退版本

```
# 回退指定 commit_id 版本
git reset --hard commit_id

# 回退上一个版本
git reset --soft HEAD^
# or
git reset --soft HEAD~1
```

###  撤销代码

```
git revert commit_id
```

### 修改分支名

```
# 第一步
git branch -m oldBranchName newBranchName

# 第二步
git push origin :oldBranchName

# 第三步
git push --set-upstream origin newBranchName
```

### 查看 `git` 配置

```
# 查看全局配置
git config --global --list

# 查看用户名
git config --global user.name
```

###  添加用户名

```
git config --global --add user.name newName
```

### 删除用户名

```
git config --global --unset user.name
```

###  修改用户名

```
git config --global user.name newName
```

### 配置 `Git` 用户名和邮箱

```
# 用户名
git config --global user.name "Your Name"

# 邮箱
git config --global user.email "email@example.com"
```

### 统计代码行数

```
git ls-files | xargs wc -l
```

### 文件或文件夹重命名

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

## 