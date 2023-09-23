
/** 备份 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "spoony-z",
  base: '/ts-tool-list/',
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    // theme: {
    //   light: "vitesse-light",
    //   dark: "vitesse-dark",
    // },
    theme: {
      name: 'vitesse-light',
    }
  },
  themeConfig: {
    logo: "./logo-with-shadow.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/安装使用' }
    ],

    sidebar: [
      {
        text: 'ts-tool-list',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: '安装使用', link: '/安装使用' },
          { text: '文件相关', link: '/文件相关' },
          { text: '递归', link: '/递归' },
          { text: '禁用', link: '/禁用' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'discord', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'instagram', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'linkedin', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'slack', link: 'https://github.com/vuejs/vitepress' },
      // { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: '版权所有 © 2019-present spoony-z'
    }
  }
})
