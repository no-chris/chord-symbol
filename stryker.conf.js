/* eslint-env node */
module.exports = function(config) {
	config.set({
		mutator: 'javascript',
		packageManager: 'npm',
		reporters: ['clear-text', 'progress'],
		transpilers: [],
		coverageAnalysis: 'off',
		testRunner: 'command',
		commandRunner: {
			command: 'npm run-script test-short'
		},
		mutate: ['src/**/*.js'],
	});
};
