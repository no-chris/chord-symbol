module.exports = {
	dataSource: 'prs',
	changelogFilename: 'CHANGELOG.md',
	ignoreIssuesWith: ['dependencies', 'ignore'],
	groupBy: {
		'Enhancements:': ['enhancement'],
		'Documentation:': ['documentation'],
		'Bug Fixes:': ['bug'],
	},
	template: {
		issue: '- {{name}} [{{text}}]({{url}})',
	},
};
