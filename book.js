module.exports = {
  // 书籍信息
  title: "黑眼圈手册",
  description: "还没想好",
  author: "黑眼圈小组",
  lang: "zh-cn",

  // 插件列表
  plugins: [
    "-lunr",
    "-search",
    "search-pro2",
    "code",
    "expandable-chapters",
    "hide-element",
  ],

  // 插件全局配置
  pluginsConfig: {
    "hide-element": {
      elements: [".gitbook-link"],
    },
  },

  // 模板变量
  variables: {
    // 自定义
  },
};
