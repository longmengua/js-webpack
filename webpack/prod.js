const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('../util')
const shared_config = require('./shared')

module.exports = {
    mode: "production",
    bail: true,
    entry: path.resolve('src/index.tsx'),
    output: {
        path: path.resolve('build'),
        filename: 'js/[name].[contenthash:8].js',
    },
    module: {
        rules: [
            {
                oneOf: [
                    shared_config.tsLoader,
                    shared_config.cssLoader,
                    shared_config.fontLoader,
                    shared_config.urlLoader,
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: shared_config.extensions,
    },
    plugins: [
        new HtmlWebpackPlugin({
            ...shared_config.HtmlWebpackPluginConfig,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new webpack.ProvidePlugin(shared_config.ProvidePlugin),
        new CopyPlugin(shared_config.CopyPluginConfig),
        new MiniCssExtractPlugin(shared_config.MiniCssExtractPluginConfig),
    ]
}
