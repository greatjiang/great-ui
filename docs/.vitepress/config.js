import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/greatbrick/",
  title: "GreatBrick",
  description: "greatbrick components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/components-examples' }
    ],

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '安装', link: '/install' }
        ]
      },
      {
        text: '基础',
        items: [
          { text: '按钮', link: '/button' },
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/greatjiang/greatbrick'
      }
    ]
  }
})
