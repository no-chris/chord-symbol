/* eslint-env node */
// Purpose of rollup is only to create the ESM bundle (chord-symbol.mjs) since as of today,
// webpack does not seems to support this yet
const path = require('path');
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const buildDir = 'lib';

export default {
	input: 'src/index.js',
	output: {
		file: path.resolve(process.cwd(), buildDir) + '/chord-symbol-esm.js',
		format: 'es'
	},
	plugins: [
		resolve(),
		commonjs()
	]
};
