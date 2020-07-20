const baseWebpackConfig = require('./webpack.config.base') 
const { merge } = require('webpack-merge')

const TerserWebpackPlugin = require('terser-webpack-plugin') // 将js进行混淆合并

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    stats: { children: false, warnings: false },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: { // 压缩选项
                        warnings: false, // 不要任何警告⚠️
                        drop_console: false, // 是否注释掉console
                        dead_code: true,
                        drop_debugger: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    mangle: true
                },
                parallel: true,
                sourceMap: false
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce: true
                }
            }
        }
    }
})

module.exports = webpackConfig