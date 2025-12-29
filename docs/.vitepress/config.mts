import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Guide SeatMap",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Quickstart', link: '/developer-guide/quickstart/' },
          { text: 'Concepts', link: '/developer-guide/concepts/' },
          { text: 'Guides', link: '/developer-guide/guides/' },
          { text: 'Reference', link: '/developer-guide/reference/' },
          { text: 'Changelog', link: '/developer-guide/changelog/' },
          { text: 'Decisions', link: '/developer-guide/decisions/' },
          { text: 'Contributing', link: '/developer-guide/contributing/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
