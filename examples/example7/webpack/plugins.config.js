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
    logo: 'src/img/icon.png',
    //logo: 'src/img/icon.svg',
    mode: 'webapp',
    devMode: 'webapp',
    prefix: 'assets/favicons/',
    cache: true,
    inject: htmlPlugin => {
      return true
      return basename(htmlPlugin.options.filename) === 'pages/articles.html'
    },
    favicons: {
      background: '#fff',
      theme_color: '#333',
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
