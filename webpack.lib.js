/* eslint-env node */
/**
 * This is the webpack configuration for the library only
 */
const path = require('path');

const CleanWebpackPlugin    = require('clean-webpack-plugin');
const TerserPlugin       	= require('terser-webpack-plugin');
const BundleAnalyzerPlugin 	= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildDir = 'dist';

const config = {
	target:'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-symbol': './src/index.js',
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
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
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
	}
};

module.exports = config;

