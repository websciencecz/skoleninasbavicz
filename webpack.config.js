const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {

	entry: "./index.js",

	output: {
		path: path.resolve(__dirname, 'html'),
		filename: 'js/bundle.js',
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: './css/style.min.css',
		}),
	],

	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
						}
					}
				],

			}
		]
	},
};