const path = require('../util')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	MiniCssExtractPluginConfig: {
		filename: '[name].[contenthash:8].css',
	},
	HtmlWebpackPluginConfig: {
		filename: 'index.html',
		template: path.resolve('public/index.html'),
		inject: 'body',

		// variables in below are for webpack.options
		preview: process.env.PREVIEW,
		mode: process.env.MODE,
	},
	CopyPluginConfig: {
		patterns: [
			{
				from: path.resolve('public'),
				globOptions: {
					ignore: ['**/index.html'],
				}
			},
		],
	},
	ProvidePlugin: {
		process: 'process/browser',
	},
	extensions: ['.tsx', '.ts', '.js', 'jsx'],
	tsLoader: {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	},
	cssLoader: {
		test: /\.s[ac]ss$/i,
		use: [
			MiniCssExtractPlugin.loader,
			// // Creates `style` nodes from JS strings
			// "style-loader", // usually, use this for dev mode, but in the case, I don't want it.
			// Translates CSS into CommonJS
			"css-loader",
			// postcss-loader, pre-process css
			// For adding mapped attributes for different browsers, you need to use autoprefixer plugins
			{
				loader: "postcss-loader",
				options: {
					postcssOptions: {
						plugins: [require('autoprefixer')],
					},
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	},
	urlLoader: {
		test: /\.(png|jpg|gif)$/i,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 8192,
					encoding: true,
				},
			},
		],
	},
	fileLoader: {
		test: /\.(png|jpe?g|gif)$/i,
		loader: 'file-loader',
		options: {
			name: '[path][name].[ext]',
		},
	},
	fontLoader: {
		test: /\.(woff|woff2|eot|ttf|otf|)$/,
		use: [
			{
				loader: 'file-loader',
			},
		],
	},
}