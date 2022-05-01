const webpack = require('webpack')

const baseConfig = require('./webpack/base.config');
const pluginsConfig = require('./webpack/plugins.config');

const allConfig = {
    ...baseConfig,
    ...pluginsConfig
}

module.exports = allConfig;
