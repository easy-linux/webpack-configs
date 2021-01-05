const webpack = require('webpack');
    
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
};