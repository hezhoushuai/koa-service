const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('./utils')

const webpackconfig = {
    target: 'node',
    entry: {
        server: path.join(utils.APP_PATH, 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: utils.DIST_PATH
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: [utils.resolve('node_modules')]
        }]
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({ // 创建一个全局的常量,用于打包的时候使用
            'process.env': {
                NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
            }
        })
    ],
    node: {
        console: true,
        global: true,
        path: true,
        setImmediate: true,
        __dirname: true,
        __filename: true,
        Buffer: true,
        process: true
    }
} 

module.exports = webpackconfig