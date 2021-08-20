module.exports = {
  publicPath: "/",
  outputDir: "dist", //build输出目录
  assetsDir: "assets", //静态资源目录（js, css, img）
  // lintOnSave: process.env.NODE_ENV !== "production", //是否开启eslint
  lintOnSave: true, //是否开启eslint
  devServer: {
    open: true, //是否自动弹出浏览器页面
    // host: "localhost", //表示启动的时候使用的域名，默认可以不写，则是使用localhost和本机IP
    port: "80", // 设置端口号
    https: false, //是否使用https协议
    hotOnly: false, //是否开启热更新
    disableHostCheck: true, // 可以开启内网穿透
    proxy: {
      "/dev-api": {
        target: "http://192.168.1.2:3006", //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          "/dev-api": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "你想设置的title名字";
      return args;
    });
  },
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
      vant: "vant",
    },
    resolve: {
      alias: {
        components: "@/components",
      },
    },
  },
};
