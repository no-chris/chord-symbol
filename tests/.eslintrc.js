module.exports = {
	env: {
		jest: true,
		node: true,
	},
	rules: {
		'no-restricted-imports': ['off'],
		'max-len': ['off'],
		'max-params': ['warn', { max: 6 }],
	},
};
