# 插件



## 1.目录

页内目录

`gitbook-plugin-page-treeview`用于在页面生成目录

```
{
    "plugins": [
        "page-treeview"
    ],
    "pluginsConfig": {
        "page-treeview": {
            "copyright": "",
            "minHeaderCount": "2",
            "minHeaderDeep": "2"
        }
    }
}
```

但会在目录下方产生这么一段文字：

> TreeviewCopyright © Spark & Shine all right reserved, powered by aleen42

去掉这段文字。打开`node_modules/gitbook-plugin-page-treeview/lib/index.js`，找到这一行，删掉`copyRight +`。

```
return renderContent ? `<div class="treeview__container">${copyRight + renderContent}</div>` : '';
```

但还有一个小问题，就是目录跟正文间距太大了，解决方法：修改`.treeview__container`的样式，打开`gitbook-plugin-page-treeview/assets/style.css`文件，将`.treeview__container`中的`margin-bottom`设小。

```
.treeview__container {
    position: relative;
    margin-bottom: 5px;
    padding-bottom: 10px;
}
```



## 2.灵活警报

`gitbook-plugin-flexible-alerts`

```
{
  "plugins": [
    "flexible-alerts"
  ],
  "pluginsConfig": {
    "flexible-alerts": {
      "note": {
        "label": "Hinweis"
      },
      "tip": {
        "label": "Tipp"
      },
      "warning": {
        "label": "Warnung"
      },
      "danger": {
        "label": "Achtung"
      }
    }
  }
}
```

样式如下

这是NOTE

> [!NOTE]
>
> 这是NOTE

这是NOTE FLAT

>[!NOTE|style:flat]
>
>这是NOTE|style:flat

这是TIP

> [!TIP]
>
> 这是TIP

这是TIP FLAT

> [!TIP|style:flat]
>
> 这是TIP|style:flat

这是WARNING

> [!WARNING]
>
> 这是WARNING

这是WARNING FLAT

> [!WARNING|style:flat]
>
> 这是WARNING|style:flat

这是DANGER

> [!DANGER]
>
> 这是DANGER

这是DANGER FLAT

> [!DANGER|style:flat]
>
> 这是DANGER
