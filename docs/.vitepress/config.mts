import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Guide SeatMap",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/developer-guide/quickstart/" },
    ],

    outline: [2, 3],

    sidebar: {
      "/developer-guide/": [
        {
          text: "Documentation",
          items: [
            { text: "Quickstart", link: "/developer-guide/quickstart/" },
            { text: "Concepts", link: "/developer-guide/concepts/" },
            {
              text: "Guides",
              link: "/developer-guide/guides/",
              collapsed: false,
              items: [
                {
                  text: "Problem-solving Guide",
                  link: "/developer-guide/guides/problem-solving",
                },
              ],
            },
            { text: "Reference", link: "/developer-guide/reference/" },
            { text: "Changelog", link: "/developer-guide/changelog/" },
            { text: "Decisions", link: "/developer-guide/decisions/" },
            { text: "Contributing", link: "/developer-guide/contributing/" },
          ],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
