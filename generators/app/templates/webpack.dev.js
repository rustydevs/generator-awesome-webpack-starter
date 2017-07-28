var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'build')
	},
	devtool : 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: "css-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: "resolve-url-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: {
								includePaths: [
									path.resolve(__dirname, "scss/includePath")
								],
								sourceMap: true
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build'], {
			verbose: true,
  			dry: false
		}),
		new ExtractTextPlugin({
			filename:  (getPath) => {
				return getPath('css/[name].[hash].css').replace('css/js', 'css');
			},
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack Scaffolding Developer'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "build"),
  		compress: true,
		port: 2400,
		clientLogLevel: "none"
	}
};