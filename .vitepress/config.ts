import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FeiYangBlog",
  description: "飞扬技术博客",
  base: "/FeiYangBlog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "主页", link: "/" }],

    // sidebar: [
    //   {
    //     // text: "Examples",
    //     // items: [
    //     //   { text: "Markdown Examples", link: "docs/examples/markdown-examples" },
    //     //   { text: "Runtime API Examples", link: "docs/examples/api-examples" },
    //     // ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/feiyang102/FeiYangBlog.git" },
    ],
  },
});
