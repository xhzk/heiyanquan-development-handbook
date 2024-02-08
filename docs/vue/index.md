## 一、创建项目

### 1.创建vite+vue3+ts项目

```
pnpm creat vite
```

### 2.运行项目

```
pnpm install
pnpm dev
```

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\success.png)

## 二、代码风格控制(团队开发，初学跳过)

### 1.ESlint

> **`eslint` 应主要负责校验语法校验，`prettier` 应主要负责代码格式化**

```
pnpm i eslint -D
```

#### 1.pnpm create @eslint/config

- **How would you like to use ESLint? （你想如何使用 ESLint?）**
  To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码风格）

- **What type of modules does your project use?（你的项目使用哪种类型的模块?）**

  JavaScript modules (import/export)

- **Which framework does your project use? （你的项目使用哪种框架?）**

  Vue.js

- **Does your project use TypeScript?（你的项目是否使用 TypeScript？）**

  Yes

- **Where does your code run?（你的代码在哪里运行?）**
  选择 Browser 和 Node***（按空格键进行选择，选完按回车键确定）***

- **How would you like to define a style for your project?（你想怎样为你的项目定义风格？）**

  Use a popular style guide（使用一种流行的风格指南）

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\eslint.png)

#### 2.完善 .eslintrc.js 的 rules 

```
"rules": {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off' // 对模板中的自定义组件强制执行属性命名样式
  }
```

#### 3.忽略文件

在项目根目录新建 `.eslintignore` 文件

```
dist
node_modules
```

#### 4.添加命令

在 `packjson.json` 中 `script` 字段添加

```
"lint:eslint": "eslint src --fix"
```

### 2.prettier

#### 1.安装

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

#### 2.配置prettier

根目录下新建 `.prettierrc.js` 文件

```
{
  "printWidth": 100,	//每行最多显示的字符数
  "tabWidth": 2,//tab的宽度 2个字符
  "useTabs": true,//使用tab代替空格
  "semi": false,//结尾使用分号
  "singleQuote": true,//使用单引号代替双引号
  "trailingComma": "none",//结尾是否添加逗号
  "bracketSpacing": true,//对象括号俩边是否用空格隔开
  "bracketSameLine": true,;//组件最后的尖括号不另起一行
  "arrowParens": "always",//箭头函数参数始终添加括号
  "htmlWhitespaceSensitivity": "ignore",//html存在空格是不敏感的
  "vueIndentScriptAndStyle": false,//vue 的script和style的内容是否缩进
  "endOfLine": "auto",//行结尾形式 mac和linux是\n  windows是\r\n 
  "singleAttributePerLine": false //组件或者标签的属性是否控制一行只显示一个属性
}
```

#### 4.忽略文件

根目录下新建 `.prettierignore` 文件

```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

#### 5.ESlint配置

`.eslintrc.js`的`extends`尾行

```
'plugin:prettier/recommended',
```

#### 6.添加命令

在 `packjson.json` 中 `script` 字段添加

```
 "format": "prettier --write \"./**/*.{html,vue,js,ts,json,md}\" "
```

### 3.stylelint

> **`stylelint` 是 css 的格式化工具**

#### 1.安装

```
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

#### 2.配置stylrlint

在项目根目录下新建 `.stylelintrc.js`文件

```
module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件,
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}

```

#### 3.忽略文件

在项目根目录下新建 `.stylelintignore`文件

```
/node_modules/*
/dist/*
/html/*
/public/*
```

#### 4.添加命令

在 `packjson.json` 中 `script` 字段添加

```
"lint:stylelint": "stylelint src/**/*.{css,scss,vue} --cache --fix"
```

### 4.husky

> [!WARNING]
>
> 进行前需要先将项目放到git仓库中

#### 1.安装

(最新版不会用，嘿嘿ヾ(^▽^*))))

```
pnpm install -D husky@8.0.0
```

#### 2.添加命令

`package.json`的`scripts`尾行

```
"prepare": "husky install"
```

#### 3.配置husky

`.husky`文件下的`pre-commit`文件

```
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"
pnpm lint:prettier
```

### 5.commitlint

#### 1.安装

```
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

#### 2.配置commitlint

在项目根目录下新建 `commitlint.config.js `文件

```
module.exports = {
	extends: ['@commitlint/config-conventional'],
	// 校验规则
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat', //增加新功能
				'fix', //修复问题/BUG
				'perf', //优化/性能提升
				'style', //代码风格相关无影响运行结果的
				'docs', //文档/注释
				'test', //测试相关
				'refactor', //重构
				'build', //构建系统或外部依赖项的更改
				'ci', //持续集成
				'chore', //杂项，不涉及源代码或测试文件的更改
				'revert', //撤销修改
				'wip', //开发中
				'workflow', //工作流改进
				'types', //类型定义文件更改
				'release' //发布新版本
			]
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72]
	}
}

```

#### 3.添加命令

在 `packjson.json` 中 `script` 字段添加

```
"commitlint": "commitlint --config commitlint.config.js -e -V"
```

#### 4.搭配husky

```
npx husky add .husky/commit-msg 
```

在根目录下 `husky`文件夹中的 `commit-msg`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
pnpm commitlint
```

### 6.EditorConfig 

在项目根目录下新建 `.editorconfig `文件

```
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```



## 三、配置@

### 1.安装@types/node

```
pnpm install @types/node
```

### 2.vite.config.ts

```
import { resolve } from 'path'
```

```
resolve: {
  alias: {
    '@': resolve('src')
  }
},
```

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\vite.png)

### 3.tsconfig.json

```
// 配置@
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"],
 }
```



## 四、配置router

### 1.安装router

```
pnpm install vue-router
```

### 2.建立router文件

在`src`文件夹下建立`router/modules`与`router/index.ts`

### 3.modules

### 4.index.ts

### 5.main.ts

```
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
// 引入我们导出的 router 
import { setupRouter } from '@/router';

const setupApp = async () => {
  // 创建路由
  setupRouter(app);
  app.mount('#app');
};

setupApp();
```

### 6.路由出口

修改`App.vue`文件

```
<script lang="ts" setup></script>
<template>
	<div>
		<!-- 配置路由出口 -->
		<router-view />
	</div>
</template>
```



## 插件

###  1.Path Intellisense——VsCode 路径自动提示、路径自动补全插件

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\path.png)

### 2.ESlint

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\ES.png)

### 3.Prettier

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\prettier.png)

### 4.Stylelint

![](E:\项目\开发手册\heiyanquan-handbook\docs\vue\static\stylelint.png)

### 5.EditorConfig for VS Code

![](..\vue\static\editor.png)