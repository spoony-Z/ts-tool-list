import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ts-tool-list",
  description: "vuepress-theme-hope 的文档演示",
  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
