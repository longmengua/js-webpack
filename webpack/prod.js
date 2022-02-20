const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('../util')
const webpack = require('webpack')

module.exports = {
    mode: "production",
    bail: true,
    entry: path.resolve('src/index.tsx'),
    output: {
        path: path.resolve('build'),
        filename: '[name].[contenthash:8].js',
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src/index.html'),
            preview: process.env.PREVIEW,
            mode: process.env.MODE,
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
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('public/'),
                },
            ],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
}
