module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Powered by Don",
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'wwwtdonsite@gmail.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'tdon, Vue, Nuxt, Node, 前端开发, JavaScript' },
      { hid: 'description', name: 'description', content: '基于Vue.js和Node.js开发的前端博客' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'http://at.alicdn.com/t/font_461741_jthqvin68o8estt9.js' }]
  },
  // Global CSS
  css: [
    { src: '~assets/sass/app.scss', lang: 'sass' },
    { src: 'highlight.js/styles/atelier-cave-light.css' } 
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
  plugins: [{ src: '~plugins/axios.js' }]
};
