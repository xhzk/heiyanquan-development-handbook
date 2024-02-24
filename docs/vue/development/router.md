## 配置router

### 1.安装router

```
pnpm install vue-router
```

### 2.建立router文件

在`src`文件夹下建立`router/modules`与`router/index.ts`

### 3.modules

在 modules 文件夹下创建模块化的 ts 文件，并填入对应的代码，模板如下：

 `modules/example.ts`

```
export default [
  {
	path: '/example',
	name: 'example',
	component: () => import('@/views/example/index.vue'),
	meta: {
      title: '举例'
	}
  }
];
```

### 4.index.ts

```
import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 引入 example.ts
import exampleRouter from './modules/example';



export const publicRoutes: Array<RouteRecordRaw> = [...exampleRouter];

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
});

/* 初始化路由表 */
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route;
		if (name) {
			router.hasRoute(name) && router.removeRoute(name);
		}
	});
}

/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
	app.use(router);
};

/* 导出 router */
export default router
```

### 5.main.ts

```
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
// 引入导出的 router 
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

