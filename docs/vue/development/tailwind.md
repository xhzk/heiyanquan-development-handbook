## css原子化

Tailwind官网[Tailwind CSS ](https://tailwindcss.com/)

### 1.安装

```
pnpm install -D tailwindcss postcss autoprefixer
```

### 2.初始化

```
npx tailwindcss init -p
```

修改`postcss.config.js` 文件

```
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {}
	}
}
```

修改`tailwind.config.js`文件

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "var(--el-bg-color)",
        primary: "var(--el-color-primary)",
        primary_light_9: "var(--el-color-primary-light-9)",
        text_color_primary: "var(--el-text-color-primary)",
        text_color_regular: "var(--el-text-color-regular)",
        text_color_disabled: "var(--el-text-color-disabled)"
      }
    }
  }
};
```

### 3.创建样式

建立`.style/tailwind.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4.防止慢更新

在`main.ts`文件种导入`tailwind.css`

> [!NOTE]
>
> 一定要在main.ts中导入tailwind.css，防止[vite](https://so.csdn.net/so/search?q=vite&spm=1001.2101.3001.7020)每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题

```
import "./style/tailwind.css";
```

