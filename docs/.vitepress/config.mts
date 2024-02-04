import { defineConfig } from "vitepress";

let base = "/FeiYangBlog";
// base = "";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: base,
  title: "飞扬 Blog",
  description: "FeiYang Blog",
  head: [["link", { rel: "icon", href: `${base}/favicon.ico` }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "JS", link: "/js/index", activeMatch: "/js/" },
      { text: "Vue", link: "/vue/index", activeMatch: "/vue/" },
      {
        text: "工程化",
        link: "/engineering/index",
        activeMatch: "/engineering/",
      },
      { text: "算法", link: "/algorithm/index", activeMatch: "/algorithm/" },
      { text: "服务端", link: "/backend/index", activeMatch: "/backend/" },
      { text: "其他", link: "/others/index", activeMatch: "/others/" },
    ],
    sidebar: {
      "/js/index": { base: "/js/index", items: sidebarDefault("JS") },
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

function sidebarDefault(path: string) {
  return [
    {
      text: `TODO ${path}`,
      collapsed: false,
      // items: [{ text: "TODO", link: "/markdown-examples" }],
    },
  ];
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
  ];
}
