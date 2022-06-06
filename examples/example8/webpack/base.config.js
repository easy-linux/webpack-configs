const path = require('path');
const constants = require('./constants');
const multipage = require('./multipage.config');

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

module.exports = {
    mode: constants.builds[buildType],
    entry: {
        ...multipage.entry
    },
    output: {
        path: path.join(__dirname, '../public'),
        filename: '[name].js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, '../public'),
        hot: true
    },
}