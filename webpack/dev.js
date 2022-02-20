const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('../util')

module.exports = {
    mode: "development",
    bail: false,
    entry: {
        index: path.resolve('src/index.tsx')
    },
    output: {
        path: path.resolve('build'),
        filename: '[name].js',
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src/index.html'),
            preview: process.env.PREVIEW,
            mode: process.env.MODE,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('public/'),
                },
            ],
        }),
    ]
}
