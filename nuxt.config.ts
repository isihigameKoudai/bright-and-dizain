import path from 'path'

const srcDir: string = 'src/'
require('dotenv').config({ path: './.env' })

const SLACK_API_CODE: string = process.env.SLACK_API_CODE || ''
const GA: string = process.env.GA || ''

const nuxtConfig = {
  ssr: true,
  srcDir,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Bright&dezain',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'My portfolio site. Photograph, Art direction, Web, Engineering, Creative.',
      },
      { property: 'og:title', content: 'Bright&dizain' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/card.jpg' },
      { property: 'og:image:alt', content: 'bnd images' },
      { property: 'og:url', content: 'https://www.brightanddizain.com/' },
      { property: 'og:locale', content: 'ja_JP' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Bright&dizain' },
      {
        name: 'twitter:description',
        content:
          'My portfolio site. Photograph, Art direction, Web, Engineering, Creative.',
      },
      { name: 'twitter:image', content: '/card.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '200x200', href: '/icon.jpg' },
      {
        rel: 'preconnect',
        href: 'https://www.google-analytics.com',
        crossorigin: true,
      },
      { rel: 'dns-prefetch', href: 'https://www.brightanddizain.com/' },
      { rel: 'preload', as: 'image', href: '/img/top/mainImage01.jpg' },
    ],
  },
  css: [
    `~/assets/css/reset.scss`,
    `~/assets/css/style.scss`,
    `~/assets/css/util.scss`,
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true,
    },
    /*
     ** Run ESLint on save
     */
    extend(config: any, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      config.module.rules = config.module.rules.map((rule) => {
        if (
          rule.loader === 'url-loader' &&
          rule.test.toString().includes('svg')
        ) {
          return { ...rule, test: /\.(png|jpe?g|gif)$/ }
        }
        return rule
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      })

      const alias = config.resolve.alias
      config.resolve.alias = {
        ...alias,
        '@components': path.join(__dirname, srcDir + 'components'),
        utils: path.join(__dirname, srcDir + 'utils'),
        service: path.join(__dirname, srcDir + 'service'),
      }

      const tsLoader = {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          context: __dirname,
          configFile: 'tsconfig.json',
        },
      }

      for (let rule of config.module.rules) {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders = {
            ...rule.options.loaders,
            ts: tsLoader,
          }
        }
      }
    },
  },
  /*
   ** Extensions
   */
  extensions: ['ts', 'tsx', 'js', 'jsx'],
  modules: [
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-analytics',
      {
        id: GA,
      },
    ],
  ],
  buildModules: [
    '@nuxtjs/composition-api/module',
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
  ],
  env: {
    SLACK_API_CODE,
    GA,
  },
  plugins: [],
  manifest: {
    name: 'BrightAndDizain',
    lang: 'ja',
    short_name: 'Bright&dizain',
    title: 'Bright&dizain',
    'og:title': 'Bright&dizain',
    description:
      'My portfolio site. Photograph, Art direction, Web, Engineering, Creative.',
    'og:description':
      'My portfolio site. Photograph, Art direction, Web, Engineering, Creative.',
  },
  workbox: {
    dev: false,
  },
}

export default nuxtConfig
