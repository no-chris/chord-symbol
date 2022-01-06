/* eslint-env node */
const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				browsers: 'defaults',
			},
		},
	],
];

module.exports = { presets };
