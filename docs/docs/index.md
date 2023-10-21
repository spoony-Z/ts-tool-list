---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "tsTool-list"
  text: "使用文档"
  tagline: 使用 Typescript 封装的函数
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
    details:  根据文件URL下载文件等
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
<!-- <style> :root { --vp-home-hero-name-color: transparent; --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff); --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); --vp-home-hero-image-filter: blur(40px); } @media (min-width: 640px) { :root { --vp-home-hero-image-filter: blur(56px); } } @media (min-width: 960px) { :root { --vp-home-hero-image-filter: blur(72px); } } </style> -->
<!-- <VPTeamMembers size="small" :members="members" /> -->
