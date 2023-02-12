/* eslint-env node */
module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules: {
		'react/prop-types': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
