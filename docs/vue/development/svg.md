## 封装SVG组件

> [!NOTE]
>
> 可以用，但是iconiFy更好用，但是有点学习成本，可以看看这个项目[iconify-offline-arrange](https://github.com/xiaoxian521/iconify-offline-arrange)，或者访问官网[Iconify](https://icon-sets.iconify.design/)

### 1.安装

```
// 1、先执行这条命令
pnpm i fast-glob -D
// 2、再执行这条命令
pnpm i vite-plugin-svg-icons -D
```

### 2.组件SVG组件

建立`components/svgIcon/index.vue`文件

```
<script setup lang="ts">
import { computed } from "vue";
 
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  iconColor: {
    type: String,
    default: "CurrentColor",
  },
});
const iconName = computed(() => `#icon-${props.iconClass}`);
const svgClass = computed(() => {
  if (props.className) {
    return "svg-icon " + props.className;
  } else {
    return "svg-icon";
  }
});
</script>
<template>
  <svg :class="svgClass" aria-hidden="true" :fill="iconColor">
    <use :xlink:href="iconName" />
  </svg>
</template>
 
<style scoped>
.svg-icon {
  // svg 图标默认宽高，根据情况自行调整
  width: 20px;
  height: 20px;
  fill: currentColor;
  overflow: hidden;
}
</style>
```

### 3.main.ts

```
// svg 相关
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon/index.vue'

app
  .component('svg-icon', SvgIcon)
```

### 4.vite.config.ts

```
import { resolve } from 'path'
// svg plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  plugins: [
    // 修改 svg 相关配置
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(__dirname, './src/assets/svg')],
    })],
})


```

### 5.注意

> [!NOTE]
>
> 若想修改 svg 的颜色，记得将 svg图片代码中的 fill属性删除删除