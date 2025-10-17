import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cosmoslide",
  description: "Guide and Documentation for Cosmoslide",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/tutorial/' },
      { text: 'Concepts', link: '/concepts/' }
    ],

    sidebar: {
      '/tutorial/': [
        {
          text: 'Tutorial',
          items: [
            { text: 'Introduction', link: '/tutorial/' },
            { text: 'Uploading PDFs', link: '/tutorial/uploading' },
            { text: 'Viewing Slides', link: '/tutorial/viewing' }
          ]
        }
      ],
      '/concepts/': [
        {
          text: 'Core Concepts',
          items: [
            { text: 'Overview', link: '/concepts/' },
            { text: 'PDF Sharing', link: '/concepts/pdf-sharing' },
            { text: 'ActivityPub Integration', link: '/concepts/activitypub' },
            { text: 'Federation', link: '/concepts/federation' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
