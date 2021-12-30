export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode: 'spa',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '06 config plugin and modules',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'}
    ]
  },
  loading: {color: 'yellow', height: '4px', duration: 6000},
  loadingIndicator: {
    name: 'circle',
    color: '#fa239a'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    craditional: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  dev: true,
  env: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-1d618-default-rtdb.firebaseio.com/'
  },
  generate: {},
  router: {
    // base:'/..'
    // middleware: 'log'
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    },
    linkActiveClass: 'active'
  },
  transitions: {
    name: 'fade',
    mode: 'out-in'
  }
}
