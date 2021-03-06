export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DFON Canvas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DFON Canvas' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    [
      '@nuxtjs/vuetify',
      {
        /* module options */
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
  ],

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimeZone: 'Asia/Taipei',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      presets() {
        return [['@nuxt/babel-preset-app', { loose: true }]]
      }
    },
    extend() {

    },
    uglify: {
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    extractCSS: true,
    transpile: ['vee-validate/dist/rules'],
    analyze: process.env.NODE_ENV !== 'production'
  },
  env: {
    API_URL: process.env.NUXT_ENV_API_URL
  },
  loading: {
    color: '#fff',
    height: '2px'
  },
  vuetify: {
    optionsPath: './vuetify.options.js'
  }
}
