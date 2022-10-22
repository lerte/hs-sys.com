export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '首頁',
    titleTemplate: '%s | 皇室音響（廣州）有限公司',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '英國皇室音響' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '皇室音响，HS, HS音响,HS AUDIO,皇室音響（廣州）有限公司,八度前级'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        minifyJS: true,
        minifyCSS: true,
        decodeEntities: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        trimCustomFragments: true,
        removeEmptyAttributes: true,
        collapseBooleanAttributes: true,
        processConditionalComments: true,
        removeRedundantAttributes: true
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  hooks: {
    generate: {
      page(page) {
        const cheerio = require('cheerio')
        const $ = cheerio.load(page.html, { decodeEntities: false })
        const attrs = [
          'data-hid',
          'data-n-head',
          'data-vue-ssr-id',
          'data-n-head-ssr',
          'data-server-rendered'
        ]
        attrs.forEach((value) => {
          $('*[' + value + ']').removeAttr(value)
        })
        page.html = $.html()
      }
    }
  },
  generate: {
    dir: 'public'
  }
}
