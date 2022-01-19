export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'political-disposition-determiner-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/pre.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/index.js', ssr: false },
    { src: '@/plugins/vue-shortkey.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    [
      '@nuxtjs/i18n',
      {
        // 대응할 언어들 셋팅
        locales: [
          { code: 'ko', name: 'Korean', iso: 'ko_KR', file: 'ko.json' },
          { code: 'en', name: 'English', iso: 'en_US', file: 'en.json' },
          { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
        ],
        defaultLocale: 'ko',
        langDir: 'locales/',
        strategy: 'prefix_except_default',
        vueI18n: {
          fallbackLocale: 'ko',
        },
        lazy: true,
        vueI18nLoader: true,
        vuex: false,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  server: {
    host: '0' // default: localhost
  },
}
