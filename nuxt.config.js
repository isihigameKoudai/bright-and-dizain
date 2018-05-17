module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-pwa-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['@/assets/scss/index.scss'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "url-loader" && rule.test
            .toString()
            .includes("svg")) {
          return { ...rule, test: /\.(png|jpe?g|gif)$/ };
        }
        return rule;
      });

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      });
    }
  },
  manifest: {
    name: 'project-name',
    lang: 'ja'
  },
  modules: [
    ['@nuxtjs/pwa',{ icon: false }]
  ],
  workbox: {
    dev: false
  }
}
