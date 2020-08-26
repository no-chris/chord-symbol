/* eslint-env node */
const path = require('path');
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const buildDir = 'lib';

export default {
	input: 'src/index.js',
	output: {
		file: path.resolve(process.cwd(), buildDir) + '/chord-symbol.mjs',
		format: 'es'
	},
	plugins: [
		resolve(),
		commonjs()
	]
};
