import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'


// .vitepress/theme/index.js
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

export default {
  extends: DefaultTheme,
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors),
      'nav-bar-content-before': () => h(Documate, {
        endpoint: 'https://sxm89cfwpf.us.aircode.run/ask',
      }),
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  },
} satisfies Theme