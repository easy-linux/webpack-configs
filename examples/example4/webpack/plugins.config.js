const path = require('path');
const constants = require('./constants');
const miniCss = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

const result = {}

result.plugins = [ 
  new miniCss({
     filename: 'styles.css',
  }),
  new HtmlWebpackPlugin({
     template: path.join(__dirname, '../src/index.html'),
     minify: buildType === constants.modes.dev ? false : true
  })
]

result.module = {
  rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
      { test: /\.(s*)css$/, use: [
        miniCss.loader,

        'css-loader',
        'sass-loader'] },
   ]
}

if( buildType === constants.modes.prod ){
  result.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}



module.exports = result
