/* eslint-env node */
module.exports = {
	testEnvironment: 'jsdom',
	rootDir: __dirname,

	collectCoverage: true,
	collectCoverageFrom: ['packages/**/src/**/*.js', '!**/node_modules/**'],
	coverageDirectory: '<rootDir>/coverage',
	coveragePathIgnorePatterns: ['node_modules'],
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},

	// whitelisting local modules in the node_modules folder
	transformIgnorePatterns: [
		'<rootDir>.*(node_modules)(?!.*chord-symbol.*).*$',
	],
	moduleNameMapper: {
		'chord-symbol': '<rootDir>/packages/chord-symbol/src/index.js',
	},
};
