const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('../util')
const shared_config = require('./shared')

module.exports = {
    mode: "development",
    bail: false,
    watch: true, // keep watching change.
    stats: true, // show information about bundle size.
    entry: {
        index: path.resolve('src/index.tsx')
    },
    output: {
        path: path.resolve('build'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                oneOf: [
                    shared_config.tsLoader,
                    shared_config.cssLoader,
                    shared_config.fontLoader,
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin(shared_config.HtmlWebpackPluginConfig),
        new webpack.ProvidePlugin(shared_config.ProvidePlugin),
        new CopyPlugin(shared_config.CopyPluginConfig),
        new MiniCssExtractPlugin(shared_config.MiniCssExtractPluginConfig),
    ]
}
