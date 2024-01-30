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

    // sidebar: [
    //   {
    //     text: "测试",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples1", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "测试",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples2", link: "/api-examples" },
    //     ],
    //   },
    // ],
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
  },
});

function sidebarDefault(path: string) {
  return [
    {
      text: `TODO ${path}`,
      // items: [{ text: "TODO", link: "/markdown-examples" }],
    },
  ];
}
