const path = require('path');
const constants = require('./constants');
const multipage = require('./multipage.config');

const miniCss = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

const result = {}

const htmlPlugins = multipage.pages.map(page => {
  return new HtmlWebpackPlugin({
    inject: true,
    favicon: './src/img/icon.svg',
    template: page.template,
    filename: page.page,
    chunks: [...page.chunks]
  })
})

result.plugins = [
  new miniCss({
    filename: 'styles/[name].css',
  }),
  ...htmlPlugins,
  new FaviconsWebpackPlugin({
    //logo: 'src/img/icon.png',
    logo: 'src/img/icon.svg',
    mode: 'webapp',
    devMode: 'webapp',
    prefix: 'assets/favicons/',
    manifest: 'src/manifest.json',
    cache: true,
    inject: htmlPlugin => {
      return true
      return basename(htmlPlugin.options.filename) === 'pages/articles.html'
    },
    favicons: {
      background: '#fff',
      theme_color: '#fff',
      start_url: '../../',
      appleStatusBarStyle: 'default',
      icons: {
        "android": [
          "android-chrome-144x144.png",
          "android-chrome-192x192.png",
          "android-chrome-256x256.png",
          "android-chrome-36x36.png",
          "android-chrome-384x384.png",
          "android-chrome-48x48.png",
          "android-chrome-512x512.png",
          "android-chrome-72x72.png",
          "android-chrome-96x96.png"
        ],
        "appleIcon": [
          //"apple-touch-icon-1024x1024.png",
          //"apple-touch-icon-114x114.png",
          //"apple-touch-icon-120x120.png",
          // "apple-touch-icon-144x144.png",
          // "apple-touch-icon-152x152.png",
          // "apple-touch-icon-167x167.png",
          "apple-touch-icon-180x180.png",
          // "apple-touch-icon-57x57.png",
          // "apple-touch-icon-60x60.png",
          // "apple-touch-icon-72x72.png",
          // "apple-touch-icon-76x76.png",
          "apple-touch-icon-precomposed.png",
          "apple-touch-icon.png",
        ],
        "appleStartup": false, //[
        //   "apple-touch-startup-image-1125x2436.png",
        //   "apple-touch-startup-image-1136x640.png",
        //   "apple-touch-startup-image-1242x2208.png",
        //   "apple-touch-startup-image-1242x2688.png",
        //   "apple-touch-startup-image-1334x750.png",
        //   "apple-touch-startup-image-1536x2048.png",
        //   "apple-touch-startup-image-1620x2160.png",
        //   "apple-touch-startup-image-1668x2224.png",
        //   "apple-touch-startup-image-1668x2388.png",
        //   "apple-touch-startup-image-1792x828.png",
        //   "apple-touch-startup-image-2048x1536.png",
        //   "apple-touch-startup-image-2048x2732.png",
        //   "apple-touch-startup-image-2160x1620.png",
        //   "apple-touch-startup-image-2208x1242.png",
        //   "apple-touch-startup-image-2224x1668.png",
        //   "apple-touch-startup-image-2388x1668.png",
        //   "apple-touch-startup-image-2436x1125.png",
        //   "apple-touch-startup-image-2688x1242.png",
        //   "apple-touch-startup-image-2732x2048.png",
        //   "apple-touch-startup-image-640x1136.png",
        //   "apple-touch-startup-image-750x1334.png",
        //   "apple-touch-startup-image-828x1792.png"
        //],
        "favicons": [
          // "favicon-16x16.png",
          // "favicon-32x32.png",
          // "favicon-48x48.png",
          "favicon.ico",
        ],
        "windows": false, //[
        // "mstile-144x144.png",
        // "mstile-150x150.png",
        // "mstile-310x150.png",
        // "mstile-310x310.png",
        // "mstile-70x70.png"
        //],
        "yandex": false, //[
        //   "yandex-browser-50x50.png"
        // ],
        coast: false,
        firefox: false,
      },
    },
  }),
]

result.module = {
  rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(s*)css$/, use: [
        miniCss.loader,

        'css-loader',
        'sass-loader']
    },
  ]
}

result.optimization = {
  splitChunks: {
    chunks: "all",
  }
}

if (buildType === constants.modes.prod) {
  result.optimization = {
    ...result.optimization,
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}



module.exports = result
