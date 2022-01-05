/* eslint-env node */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildDir = 'lib';

const config = {
	target: 'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-symbol': './src/index.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), buildDir),
		library: 'chord-symbol',
		libraryTarget: 'umd',
		// https://github.com/webpack/webpack/pull/8625
		globalObject: "typeof self !== 'undefined' ? self : this",
	},

	optimization: {
		minimize: false,
	},

	performance: {
		hints: false,
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
				loader: 'babel-loader',
			},
		],
	},
};

module.exports = config;
