const path = require('path');
const constants = require('./constants');

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

module.exports = {
    mode: constants.builds[ buildType ],
    entry: path.join(__dirname,'../src/main.js'),
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bandle.js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    devServer: {
        port: 5000,
        static: path.join(__dirname, '../public'),
        hot: true
    },
}