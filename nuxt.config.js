module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Don's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'http://at.alicdn.com/t/font_461741_ncnu4wxixbeasjor.js' }]
  },
  // Global CSS
  css: [
    { src: '~assets/sass/app.scss', lang: 'sass' }, 
  ],
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
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    vendor: ['axios']
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-async-to-generator', 'transform-runtime'],
    comments: true
  },
  /*
  ** plugins
  */
  plugins: [{ src: '~plugins/axios.js' }],
  // modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  // proxy: [
  //   [
  //     '/blogapi',
  //     {
  //       target: 'http://localhost:9000', // api主机
  //       pathRewrite: { '^/blogapi': '/blogapi' }
  //     }
  //   ]
  //   // ['/blogapi', { target: 'http://xxx.com:8080/blogapi' }]
  // ]
};
