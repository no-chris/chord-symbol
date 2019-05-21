const intervalsToModifiers = {
	// triads

	'1-2-5':		'ma add9(no3)',
	'1-b3-b5': 		'dim',
	'1-b3-5': 		'mi',
	'1-b3-#5': 		'mi(#5)',
	'1-3-b5': 		'(b5)',
	'1-3-5': 		'ma',
	'1-3-#5': 		'+',
	'1-4-5':		'sus',
};

export default function normalizeChord(parsed) {
	const lookupKey = parsed.intervals.join('-');

	let normalized = parsed.rootNote += intervalsToModifiers[lookupKey];
	if (parsed.bassNote) {
		normalized += '/' + parsed.bassNote;
	}
	return normalized;
}
