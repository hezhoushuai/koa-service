const { merge } = require('webpack-merge') // webpack配置合并工具
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, { // 定制的webpack配置
    devtool: 'eval-source-map',
    mode: 'development',
    status: { children: false }
})

module.exports = webpackConfig