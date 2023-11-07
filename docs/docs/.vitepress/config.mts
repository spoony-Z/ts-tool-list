import { defineConfig, DefaultTheme } from 'vitepress'

const ogDescription = 'javascript工具库、Typescript工具库'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://spoony_z.gitee.io/ts-tool-list/'

export default defineConfig({
  title: "spoony-z",
  description: 'javascript工具库、Typescript工具库',
  base: '/ts-tool-list/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  themeConfig: {
    logo: "./logo.png",
    // editLink: {
    //   pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
    //   text: 'Suggest changes to this page',
    // },

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

    // algolia: {
    //   appId: '7H67QR5P0A',
    //   apiKey: 'deaab78bcdfe96b599497d25acc6460e',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:en'],
    //   },
    // },
    search: {
      provider: 'local'
    },
    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      // message: 'Released under the MIT License.',
      copyright: '版权所有 © 2019-present spoony-z'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/安装使用' },
      { text: '168wangxiao-ui', link: 'https://spoony_z.gitee.io/168wangxiao-ui' }
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

    // outline: {
    //   level: [2, 3],
    // },
  },
})