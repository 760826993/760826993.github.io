import { defineConfig } from 'vitepress'

// 用数据数组管理课程，新增课程只需在这里加一行即可
const books = [
  {
    text: 'Book 1 · 第一册',
    items: [
      { text: 'Lesson 1', link: '/book1/lesson01' },
    ],
  },
  {
    text: 'Book 2 · 第二册',
    items: [
      { text: 'Lesson 1', link: '/book2/lesson01' },
    ],
  },
  {
    text: 'Book 3 · 第三册',
    items: [
      { text: 'Lesson 1', link: '/book3/lesson01' },
    ],
  },
  {
    text: 'Book 4 · 第四册',
    items: [
      { text: 'Lesson 1', link: '/book4/lesson01' },
    ],
  },
]

export default defineConfig({
  // GitHub Pages 用户站点：部署在域名根路径
  base: '/',
  title: '新概念英语学习记录',
  description: 'New Concept English learning notes',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Book 1', link: '/book1/lesson01' },
      { text: 'Book 2', link: '/book2/lesson01' },
      { text: 'Book 3', link: '/book3/lesson01' },
      { text: 'Book 4', link: '/book4/lesson01' },
    ],
    sidebar: books,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/760826993' },
    ],
  },
})
