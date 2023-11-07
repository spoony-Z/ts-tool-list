---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TS-TOOL-LIST"
  text: "使用文档"
  tagline: <p>使用 Typescript 封装的常用函数集合</p>
          <p>此网站已集成智能 AI 聊天，进入网站稍等片刻，可点击右下角聊天</p>
  image:
    src: ./logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: 👉开始
      link: /安装使用
    - theme: alt
      text: 📞联系作者
      link: /联系作者
    - theme: alt
      text: 💡作者博客
      link: /作者博客

features:
  - icon: 📁
    title: downLoadFile
    details: 根据文件URL下载文件等
  - icon: 🛠️
    title: Feature
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 🛠️
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>
