import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/FeiYangBlog/",
  title: "飞扬 Blog",
  description: "FeiYang Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "JS", link: "/js/index" },
      { text: "Vue", link: "/vue/index" },
      { text: "工程化", link: "/engineering/index" },
      { text: "算法", link: "/algorithm/index" },
      { text: "服务端", link: "/backend/index" },
      { text: "其他", link: "/others/index" },
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
      "/others/index": { base: "/others/index", items: sidebarDefault("其他") },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/feiyang102" }],

    // footer: {
    //   message: '基于 MIT 许可发布',
    //   copyright: `版权所有 © 2019-${new Date().getFullYear()} 。。。`
    // },

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

    // langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    // sidebarMenuLabel: "菜单",
    // darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
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
