// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxthub/core', '@nuxt/ui-pro', '@nuxt/content', '@nuxtjs/seo'],
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
          integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://arkhaiel.dev',
    name: 'arkhaiel.dev',
    // description: 'Welcome to my awesome site!',
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  },

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {},
        },
        rehypePlugins: {
          'rehype-katex': {},
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            light: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai',
          },
          langs: ['py', 'md', 'http'],
        },
      },
    },
    database: {
      type: 'd1',
      binding: 'DB',
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-01-20',
  hub: {
    database: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
