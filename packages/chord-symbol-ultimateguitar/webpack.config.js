/* eslint-env node */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildDir = 'lib';

const config = {
	target: 'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-symbol-ultimateguitar': './src/chordSymbolUltimateGuitar.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), buildDir),
		library: 'chord-symbol-ultimateguitar',
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

	plugins: [new CleanWebpackPlugin()],

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
