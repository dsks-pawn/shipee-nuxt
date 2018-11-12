module.exports = {
  head: {
    title: 'shippee',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'no' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.9/css/mdb.min.css"
      }
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        body: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js",
        body: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js",
        body: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.9/js/mdb.min.js",
        body: true
      }
    ]
  },
  loading: { color: '#3B8070' },
  modules: ["@nuxtjs/font-awesome"],
  loading: {
    color: "#1f74ff",
    failedColor: "white",
    height: "4px",
    rtl: false
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  plugins: [
    { src: "~/plugins/element-ui.js", ssr: true },
    { src: "~/plugins/vue-carousel.js", ssr: false },
    { src: "~plugins/vue-scrollto.js" }
  ],
  build: {
    vendor: [
      "axios",
      "element-ui",
      "vue-carousel",
      "vue-scrollto",
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

