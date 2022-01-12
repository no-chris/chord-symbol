/* eslint-env node */
const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				browsers: 'last 2 versions',
			},
		},
	],
];

module.exports = { presets };
