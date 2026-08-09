import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages 用户站点：部署在域名根路径
  base: '/',
  title: '760826993',
  description: 'My VitePress site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/760826993' },
    ],
  },
})
