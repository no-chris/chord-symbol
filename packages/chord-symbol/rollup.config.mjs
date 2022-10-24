/* eslint-env node */
// Purpose of rollup is only to create the ESM bundle (chord-symbol.mjs) since as of today,
// webpack does not seem to support this yet
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const buildDir = 'lib';

export default {
	input: 'src/index.js',
	output: {
		file: path.resolve(process.cwd(), buildDir) + '/chord-symbol-esm.js',
		format: 'es',
		esModule: true,
	},
	plugins: [resolve(), commonjs()],
};
