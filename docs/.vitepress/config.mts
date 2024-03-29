import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "飞扬 Blog",
  description: "FeiYang Blog",
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "JS", items: navJS() },
      { text: "Vue", link: "/vue/index", activeMatch: "/vue/" },
      {
        text: "工程化",
        link: "/engineering/index",
        activeMatch: "/engineering/",
      },
      { text: "算法", link: "/algorithm/index", activeMatch: "/algorithm/" },
      { text: "服务端", link: "/backend/index", activeMatch: "/backend/" },
      {
        text: "其他",
        items: navOthers(),
      },
    ],
    sidebar: {
      "/js/": { base: "/js/", items: sidebarJS() },
      "/vue/index": { base: "/vue/index", items: sidebarDefault("Vue") },
      "/engineering/index": {
        base: "/engineering/index",
        items: sidebarDefault("工程化"),
      },
      "/algorithm/index": {
        base: "/algorithm/index",
        items: sidebarDefault("算法"),
      },
      "/backend/index": {
        base: "/backend/index",
        items: sidebarDefault("服务端"),
      },
      "/others/": { base: "/others/", items: sidebarOthers() },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/feiyang102" }],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    returnToTopLabel: "回到顶部",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    logo: { src: "/blog-logo.svg", width: 24, height: 24 },
  },
});

function navJS() {
  return [{ text: "内存泄漏", link: "/js/memory-leak" }];
}

function navOthers() {
  return [
    {
      text: "《设计模式》",
      items: [
        { text: "单例模式", link: "/others/design-singleton" },
        { text: "观察者模式", link: "/others/design-observer" },
      ],
    },
    {
      text: "《计算机网络》",
      items: [
        { text: "响应状态码及含义", link: "/others/network-response-code" },
      ],
    },
    {
      text: "CSS效果",
      items: [{ text: "渐变字", link: "/others/css-gradient-text" }],
    },
    {
      text: "其他",
      items: [{ text: "npm-run-all", link: "/others/npm-run-all" }],
    },
  ];
}

function sidebarDefault(path: string) {
  return [
    {
      text: `TODO ${path}`,
      collapsed: false,
      // items: [{ text: "TODO", link: "/markdown-examples" }],
    },
  ];
}

function sidebarJS() {
  return [{ text: "内存泄漏", link: "memory-leak" }];
}

function sidebarOthers() {
  return [
    {
      text: "设计模式",
      collapsed: false,
      items: [
        { text: "单例模式", link: "design-singleton" },
        { text: "观察者模式", link: "design-observer" },
      ],
    },
    {
      text: "计算机网络",
      collapsed: false,
      items: [{ text: "响应状态码及含义", link: "network-response-code" }],
    },
    {
      text: "CSS效果",
      collapsed: false,
      items: [{ text: "渐变字", link: "css-gradient-text" }],
    },
    {
      text: "其他",
      collapsed: false,
      items: [{ text: "npm-run-all", link: "npm-run-all" }],
    },
  ];
}
