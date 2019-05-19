const intervalsToModifiers = {
	// triads

	'1-2-5':		{ strict: 'ma add9(no3)', alt: '2' },
	'1-b3-b5': 		{ strict: 'dim' },
	'1-b3-5': 		{ strict: 'mi' },
	'1-b3-#5': 		{ strict: 'mi(#5)' },
	'1-3-b5': 		{ strict: '(b5)' },
	'1-3-5': 		{ strict: 'ma' },
	'1-3-#5': 		{ strict: '+' },
	'1-4-5':		{ strict: 'sus' },
};

export default function normalizeChord(parsed) {
	const lookupKey = parsed.degrees.join('-');

	let normalized = parsed.rootNote += intervalsToModifiers[lookupKey].strict;
	if (parsed.bassNote) {
		normalized += '/' + parsed.bassNote;
	}
	return normalized;
}
