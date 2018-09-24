module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Bright&dezain",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      { hid: "description", name: "description", content: "My portfolio site. Photograph, Art direction, Web, Engineering, Creative." },
      { property: 'og:title', content: 'Brnriht&dizain'},
      { property: 'og:type', content: 'website'},
      { property: 'og:image', content: '/img/mainImageSmall.jpg' },
      { property: 'og:image:alt', content: 'bnd images' },
      { property: 'og:url', content: 'http://brightanddizain.tokyo'},
      { property: 'og:locale', content: 'ja_JP'},
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'apple-touch-icon', size: '200x200', href: '/icon.jpg' },
      { rel: 'dns-prefetch', href: 'http://brightanddizain.tokyo' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }

      config.module.rules = config.module.rules.map(rule => {
        if (
          rule.loader === "url-loader" &&
          rule.test.toString().includes("svg")
        ) {
          return { ...rule, test: /\.(png|jpe?g|gif)$/ };
        }
        return rule;
      });

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      });

      let path = require('path');
      config.resolve.alias['@components'] = path.join(__dirname, 'components');
    },
    vendor: ['axios']
  },
  modules: [["@nuxtjs/pwa", { icon: false }]],
  manifest: {
    name: "BrightAndDizain",
    lang: "ja",
    short_name: "Bright&dizain",
    title: "Briht&dizain",
    "og:title": "Brnriht&dizain",
    description: "My portfolio site. Photograph, Art direction, Web, Engineering, Creative.",
    "og:description": "My portfolio site. Photograph, Art direction, Web, Engineering, Creative."
  },
  workbox: {
    dev: false
  }
};
