/* eslint-env node */
/**
 * This is the webpack configuration for the demo page
 */
const path = require('path');

const HtmlWebpackPlugin 	= require('html-webpack-plugin');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const TerserPlugin       	= require('terser-webpack-plugin');

const buildDir = 'docs';

const config = {
	target:'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-symbol': './src/docs/index.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), buildDir),
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
			}),
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Chord-Symbol',
			template:'assets/index.html',
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
		]
	},
};

module.exports = config;

