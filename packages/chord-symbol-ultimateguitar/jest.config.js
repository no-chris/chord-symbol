/* eslint-env node */
const baseConfig = require('../../jest.config.base');
const packageJson = require('./package');

module.exports = {
	...baseConfig,
	displayName: packageJson.name,

	rootDir: '../..',
};
